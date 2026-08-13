# `dataAwsccEcsExpressGatewayService` Submodule <a name="`dataAwsccEcsExpressGatewayService` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsExpressGatewayService <a name="DataAwsccEcsExpressGatewayService" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service awscc_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service#id DataAwsccEcsExpressGatewayService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEcsExpressGatewayService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEcsExpressGatewayService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEcsExpressGatewayService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.activeConfigurations">active_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.ecsManagedResourceArns">ecs_managed_resource_arns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.infrastructureRoleArn">infrastructure_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.scalingTarget">scaling_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference">DataAwsccEcsExpressGatewayServiceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList">DataAwsccEcsExpressGatewayServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `active_configurations`<sup>Required</sup> <a name="active_configurations" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.activeConfigurations"></a>

```python
active_configurations: DataAwsccEcsExpressGatewayServiceActiveConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsList</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `ecs_managed_resource_arns`<sup>Required</sup> <a name="ecs_managed_resource_arns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.ecsManagedResourceArns"></a>

```python
ecs_managed_resource_arns: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `infrastructure_role_arn`<sup>Required</sup> <a name="infrastructure_role_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.infrastructureRoleArn"></a>

```python
infrastructure_role_arn: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference</a>

---

##### `primary_container`<sup>Required</sup> <a name="primary_container" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.primaryContainer"></a>

```python
primary_container: DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference</a>

---

##### `scaling_target`<sup>Required</sup> <a name="scaling_target" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.scalingTarget"></a>

```python
scaling_target: DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference</a>

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.status"></a>

```python
status: DataAwsccEcsExpressGatewayServiceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference">DataAwsccEcsExpressGatewayServiceStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tags"></a>

```python
tags: DataAwsccEcsExpressGatewayServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList">DataAwsccEcsExpressGatewayServiceTagsList</a>

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `task_role_arn`<sup>Required</sup> <a name="task_role_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsExpressGatewayServiceActiveConfigurations <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets()
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget()
```


### DataAwsccEcsExpressGatewayServiceConfig <a name="DataAwsccEcsExpressGatewayServiceConfig" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service#id DataAwsccEcsExpressGatewayService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns()
```


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling()
```


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath()
```


### DataAwsccEcsExpressGatewayServiceNetworkConfiguration <a name="DataAwsccEcsExpressGatewayServiceNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration()
```


### DataAwsccEcsExpressGatewayServicePrimaryContainer <a name="DataAwsccEcsExpressGatewayServicePrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer()
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration()
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment()
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials()
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets()
```


### DataAwsccEcsExpressGatewayServiceScalingTarget <a name="DataAwsccEcsExpressGatewayServiceScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget()
```


### DataAwsccEcsExpressGatewayServiceStatus <a name="DataAwsccEcsExpressGatewayServiceStatus" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus()
```


### DataAwsccEcsExpressGatewayServiceTags <a name="DataAwsccEcsExpressGatewayServiceTags" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths">ingress_paths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget">scaling_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn">service_revision_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations">DataAwsccEcsExpressGatewayServiceActiveConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `ingress_paths`<sup>Required</sup> <a name="ingress_paths" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths"></a>

```python
ingress_paths: DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a>

---

##### `primary_container`<sup>Required</sup> <a name="primary_container" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer"></a>

```python
primary_container: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a>

---

##### `scaling_target`<sup>Required</sup> <a name="scaling_target" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget"></a>

```python
scaling_target: DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a>

---

##### `service_revision_arn`<sup>Required</sup> <a name="service_revision_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn"></a>

```python
service_revision_arn: str
```

- *Type:* str

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `task_role_arn`<sup>Required</sup> <a name="task_role_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations">DataAwsccEcsExpressGatewayServiceActiveConfigurations</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">log_stream_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream_prefix`<sup>Required</sup> <a name="log_stream_prefix" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```python
log_stream_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration">aws_logs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials">repository_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_logs_configuration`<sup>Required</sup> <a name="aws_logs_configuration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```python
aws_logs_configuration: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment"></a>

```python
environment: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `repository_credentials`<sup>Required</sup> <a name="repository_credentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials"></a>

```python
repository_credentials: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets"></a>

```python
secrets: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric">auto_scaling_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue">auto_scaling_target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount">max_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount">min_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_metric`<sup>Required</sup> <a name="auto_scaling_metric" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric"></a>

```python
auto_scaling_metric: str
```

- *Type:* str

---

##### `auto_scaling_target_value`<sup>Required</sup> <a name="auto_scaling_target_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```python
auto_scaling_target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_task_count`<sup>Required</sup> <a name="max_task_count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount"></a>

```python
max_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_task_count`<sup>Required</sup> <a name="min_task_count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount"></a>

```python
min_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies">application_auto_scaling_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget">scalable_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_auto_scaling_policies`<sup>Required</sup> <a name="application_auto_scaling_policies" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies"></a>

```python
application_auto_scaling_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scalable_target`<sup>Required</sup> <a name="scalable_target" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget"></a>

```python
scalable_target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn">listener_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups">load_balancer_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns">target_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `listener_rule_arn`<sup>Required</sup> <a name="listener_rule_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn"></a>

```python
listener_rule_arn: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `load_balancer_security_groups`<sup>Required</sup> <a name="load_balancer_security_groups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups"></a>

```python
load_balancer_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_group_arns`<sup>Required</sup> <a name="target_group_arns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns"></a>

```python
target_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath">ingress_path</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups">log_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms">metric_alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups">service_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling"></a>

```python
auto_scaling: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a>

---

##### `ingress_path`<sup>Required</sup> <a name="ingress_path" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath"></a>

```python
ingress_path: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a>

---

##### `log_groups`<sup>Required</sup> <a name="log_groups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups"></a>

```python
log_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_alarms`<sup>Required</sup> <a name="metric_alarms" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms"></a>

```python
metric_alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_security_groups`<sup>Required</sup> <a name="service_security_groups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups"></a>

```python
service_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns</a>

---


### DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration">DataAwsccEcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration">DataAwsccEcsExpressGatewayServiceNetworkConfiguration</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">log_stream_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream_prefix`<sup>Required</sup> <a name="log_stream_prefix" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```python
log_stream_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">aws_logs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">repository_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer">DataAwsccEcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_logs_configuration`<sup>Required</sup> <a name="aws_logs_configuration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```python
aws_logs_configuration: DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```python
environment: DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `repository_credentials`<sup>Required</sup> <a name="repository_credentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```python
repository_credentials: DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets"></a>

```python
secrets: DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServicePrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer">DataAwsccEcsExpressGatewayServicePrimaryContainer</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets">DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets">DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets</a>

---


### DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference <a name="DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">auto_scaling_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">auto_scaling_target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">max_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">min_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget">DataAwsccEcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_metric`<sup>Required</sup> <a name="auto_scaling_metric" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```python
auto_scaling_metric: str
```

- *Type:* str

---

##### `auto_scaling_target_value`<sup>Required</sup> <a name="auto_scaling_target_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```python
auto_scaling_target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_task_count`<sup>Required</sup> <a name="max_task_count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```python
max_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_task_count`<sup>Required</sup> <a name="min_task_count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```python
min_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceScalingTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget">DataAwsccEcsExpressGatewayServiceScalingTarget</a>

---


### DataAwsccEcsExpressGatewayServiceStatusOutputReference <a name="DataAwsccEcsExpressGatewayServiceStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus">DataAwsccEcsExpressGatewayServiceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus">DataAwsccEcsExpressGatewayServiceStatus</a>

---


### DataAwsccEcsExpressGatewayServiceTagsList <a name="DataAwsccEcsExpressGatewayServiceTagsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEcsExpressGatewayServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEcsExpressGatewayServiceTagsOutputReference <a name="DataAwsccEcsExpressGatewayServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ecs_express_gateway_service

dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags">DataAwsccEcsExpressGatewayServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEcsExpressGatewayServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags">DataAwsccEcsExpressGatewayServiceTags</a>

---



