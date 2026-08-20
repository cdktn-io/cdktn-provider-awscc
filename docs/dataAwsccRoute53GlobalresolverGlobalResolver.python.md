# `dataAwsccRoute53GlobalresolverGlobalResolver` Submodule <a name="`dataAwsccRoute53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverGlobalResolver <a name="DataAwsccRoute53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_global_resolver#id DataAwsccRoute53GlobalresolverGlobalResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverGlobalResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv4Addresses">i_pv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv6Addresses">i_pv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.observabilityRegion">observability_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList">DataAwsccRoute53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `i_pv4_addresses`<sup>Required</sup> <a name="i_pv4_addresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```python
i_pv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `i_pv6_addresses`<sup>Required</sup> <a name="i_pv6_addresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```python
i_pv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observability_region`<sup>Required</sup> <a name="observability_region" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```python
observability_region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tags"></a>

```python
tags: DataAwsccRoute53GlobalresolverGlobalResolverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList">DataAwsccRoute53GlobalresolverGlobalResolverTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverGlobalResolverConfig <a name="DataAwsccRoute53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/route53globalresolver_global_resolver#id DataAwsccRoute53GlobalresolverGlobalResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverGlobalResolverTags <a name="DataAwsccRoute53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverGlobalResolverTagsList <a name="DataAwsccRoute53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference <a name="DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_globalresolver_global_resolver

dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags">DataAwsccRoute53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53GlobalresolverGlobalResolverTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags">DataAwsccRoute53GlobalresolverGlobalResolverTags</a>

---



