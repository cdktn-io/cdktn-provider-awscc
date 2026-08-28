# `dataAwsccRoute53HealthCheck` Submodule <a name="`dataAwsccRoute53HealthCheck` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53HealthCheck <a name="DataAwsccRoute53HealthCheck" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check#id DataAwsccRoute53HealthCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53HealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckTags">health_check_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList">DataAwsccRoute53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckConfig"></a>

```python
health_check_config: DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `health_check_tags`<sup>Required</sup> <a name="health_check_tags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckTags"></a>

```python
health_check_tags: DataAwsccRoute53HealthCheckHealthCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList">DataAwsccRoute53HealthCheckHealthCheckTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53HealthCheckConfig <a name="DataAwsccRoute53HealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check#id DataAwsccRoute53HealthCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53HealthCheckHealthCheckConfig <a name="DataAwsccRoute53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig()
```


### DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier <a name="DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier()
```


### DataAwsccRoute53HealthCheckHealthCheckTags <a name="DataAwsccRoute53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">child_health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.enableSni">enable_sni</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">health_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.inverted">inverted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">measure_latency</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">routing_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.searchString">search_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig">DataAwsccRoute53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `child_health_checks`<sup>Required</sup> <a name="child_health_checks" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```python
child_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_sni`<sup>Required</sup> <a name="enable_sni" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```python
enable_sni: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_domain_name`<sup>Required</sup> <a name="fully_qualified_domain_name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```python
fully_qualified_domain_name: str
```

- *Type:* str

---

##### `health_threshold`<sup>Required</sup> <a name="health_threshold" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```python
health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `insufficient_data_health_status`<sup>Required</sup> <a name="insufficient_data_health_status" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```python
insufficient_data_health_status: str
```

- *Type:* str

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```python
inverted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `measure_latency`<sup>Required</sup> <a name="measure_latency" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```python
measure_latency: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_interval`<sup>Required</sup> <a name="request_interval" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```python
request_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `routing_control_arn`<sup>Required</sup> <a name="routing_control_arn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```python
routing_control_arn: str
```

- *Type:* str

---

##### `search_string`<sup>Required</sup> <a name="search_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig">DataAwsccRoute53HealthCheckHealthCheckConfig</a>

---


### DataAwsccRoute53HealthCheckHealthCheckTagsList <a name="DataAwsccRoute53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check

dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags">DataAwsccRoute53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckHealthCheckTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags">DataAwsccRoute53HealthCheckHealthCheckTags</a>

---



