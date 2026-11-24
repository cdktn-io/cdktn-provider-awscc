# `dataAwsccRoute53HealthCheckSource` Submodule <a name="`dataAwsccRoute53HealthCheckSource` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53HealthCheckSource <a name="DataAwsccRoute53HealthCheckSource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source awscc_route53_health_check_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source#id DataAwsccRoute53HealthCheckSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53HealthCheckSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53HealthCheckSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53HealthCheckSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53HealthCheckSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53HealthCheckSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceConfig">health_check_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceId">health_check_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceStatus">health_check_source_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList">DataAwsccRoute53HealthCheckSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `health_check_source_config`<sup>Required</sup> <a name="health_check_source_config" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceConfig"></a>

```python
health_check_source_config: DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference</a>

---

##### `health_check_source_id`<sup>Required</sup> <a name="health_check_source_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceId"></a>

```python
health_check_source_id: str
```

- *Type:* str

---

##### `health_check_source_status`<sup>Required</sup> <a name="health_check_source_status" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceStatus"></a>

```python
health_check_source_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tags"></a>

```python
tags: DataAwsccRoute53HealthCheckSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList">DataAwsccRoute53HealthCheckSourceTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53HealthCheckSourceConfig <a name="DataAwsccRoute53HealthCheckSourceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source#id DataAwsccRoute53HealthCheckSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig()
```


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct()
```


### DataAwsccRoute53HealthCheckSourceTags <a name="DataAwsccRoute53HealthCheckSourceTags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList">subnet_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_configuration_list`<sup>Required</sup> <a name="subnet_configuration_list" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList"></a>

```python
subnet_configuration_list: DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig</a>

---


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>

---


### DataAwsccRoute53HealthCheckSourceTagsList <a name="DataAwsccRoute53HealthCheckSourceTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53HealthCheckSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53HealthCheckSourceTagsOutputReference <a name="DataAwsccRoute53HealthCheckSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_health_check_source

dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags">DataAwsccRoute53HealthCheckSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53HealthCheckSourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags">DataAwsccRoute53HealthCheckSourceTags</a>

---



