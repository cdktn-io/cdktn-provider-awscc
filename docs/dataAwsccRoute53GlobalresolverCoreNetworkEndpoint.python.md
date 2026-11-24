# `dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpoint <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#id DataAwsccRoute53GlobalresolverCoreNetworkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions">available_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">core_network_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `available_regions`<sup>Required</sup> <a name="available_regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```python
available_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_endpoint_id`<sup>Required</sup> <a name="core_network_endpoint_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```python
core_network_endpoint_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```python
ip_addresses: DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```python
tags: DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#id DataAwsccRoute53GlobalresolverCoreNetworkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses()
```


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">dns_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">region_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_label`<sup>Required</sup> <a name="dns_label" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_scope`<sup>Required</sup> <a name="region_scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```python
region_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_core_network_endpoint

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a>

---



