# `dataAwsccDevopsagentService` Submodule <a name="`dataAwsccDevopsagentService` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentService <a name="DataAwsccDevopsagentService" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentService(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_service#id DataAwsccDevopsagentService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDevopsagentService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDevopsagentService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.accessibleResources">accessible_resources</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.additionalServiceDetails">additional_service_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.exchangeUrlPrivateConnectionName">exchange_url_private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceDetails">service_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference">DataAwsccDevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList">DataAwsccDevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.targetUrlPrivateConnectionName">target_url_private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accessible_resources`<sup>Required</sup> <a name="accessible_resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.accessibleResources"></a>

```python
accessible_resources: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `additional_service_details`<sup>Required</sup> <a name="additional_service_details" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.additionalServiceDetails"></a>

```python
additional_service_details: DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `exchange_url_private_connection_name`<sup>Required</sup> <a name="exchange_url_private_connection_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```python
exchange_url_private_connection_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

##### `service_details`<sup>Required</sup> <a name="service_details" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceDetails"></a>

```python
service_details: DataAwsccDevopsagentServiceServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference">DataAwsccDevopsagentServiceServiceDetailsOutputReference</a>

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tags"></a>

```python
tags: DataAwsccDevopsagentServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList">DataAwsccDevopsagentServiceTagsList</a>

---

##### `target_url_private_connection_name`<sup>Required</sup> <a name="target_url_private_connection_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.targetUrlPrivateConnectionName"></a>

```python
target_url_private_connection_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentServiceAdditionalServiceDetails <a name="DataAwsccDevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty()
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow()
```


### DataAwsccDevopsagentServiceConfig <a name="DataAwsccDevopsagentServiceConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsagent_service#id DataAwsccDevopsagentService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentServiceServiceDetails <a name="DataAwsccDevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails()
```


### DataAwsccDevopsagentServiceServiceDetailsAzureIdentity <a name="DataAwsccDevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity()
```


### DataAwsccDevopsagentServiceServiceDetailsDynatrace <a name="DataAwsccDevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace()
```


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials()
```


### DataAwsccDevopsagentServiceServiceDetailsGitLab <a name="DataAwsccDevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServer <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken()
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDuty <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty()
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials()
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNow <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow()
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig()
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials()
```


### DataAwsccDevopsagentServiceTags <a name="DataAwsccDevopsagentServiceTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">web_identity_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">web_identity_token_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `web_identity_role_arn`<sup>Required</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```python
web_identity_role_arn: str
```

- *Type:* str

---

##### `web_identity_token_audiences`<sup>Required</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```python
web_identity_token_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">account_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_urn`<sup>Required</sup> <a name="account_urn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```python
account_urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">custom_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">mcp_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```python
custom_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `mcp_role_arn`<sup>Required</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```python
mcp_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">azure_identity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails">DataAwsccDevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_identity`<sup>Required</sup> <a name="azure_identity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```python
azure_identity: DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```python
dynatrace: DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```python
git_lab: DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```python
mcp_server: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```python
pager_duty: DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```python
service_now: DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails">DataAwsccDevopsagentServiceAdditionalServiceDetails</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">web_identity_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">web_identity_token_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `web_identity_role_arn`<sup>Required</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```python
web_identity_role_arn: str
```

- *Type:* str

---

##### `web_identity_token_audiences`<sup>Required</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```python
web_identity_token_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceServiceDetailsAzureIdentity</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">account_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace">DataAwsccDevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_urn`<sup>Required</sup> <a name="account_urn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```python
account_urn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace">DataAwsccDevopsagentServiceServiceDetailsDynatrace</a>

---


### DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab">DataAwsccDevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab">DataAwsccDevopsagentServiceServiceDetailsGitLab</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `api_key_name`<sup>Required</sup> <a name="api_key_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

---

##### `api_key_value`<sup>Required</sup> <a name="api_key_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">exchange_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `exchange_url`<sup>Required</sup> <a name="exchange_url" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```python
exchange_url: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```python
api_key: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">alert_policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `alert_policy_ids`<sup>Required</sup> <a name="alert_policy_ids" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```python
alert_policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `application_ids`<sup>Required</sup> <a name="application_ids" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```python
application_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_guids`<sup>Required</sup> <a name="entity_guids" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```python
api_key: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer">DataAwsccDevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer">DataAwsccDevopsagentServiceServiceDetailsMcpServer</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">custom_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">mcp_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```python
custom_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `mcp_role_arn`<sup>Required</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```python
mcp_role_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk</a>

---


### DataAwsccDevopsagentServiceServiceDetailsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">azure_identity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails">DataAwsccDevopsagentServiceServiceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_identity`<sup>Required</sup> <a name="azure_identity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```python
azure_identity: DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```python
dynatrace: DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```python
git_lab: DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```python
mcp_server: DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```python
pager_duty: DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```python
service_now: DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails">DataAwsccDevopsagentServiceServiceDetails</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty">DataAwsccDevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty">DataAwsccDevopsagentServiceServiceDetailsPagerDuty</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow">DataAwsccDevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow">DataAwsccDevopsagentServiceServiceDetailsServiceNow</a>

---


### DataAwsccDevopsagentServiceTagsList <a name="DataAwsccDevopsagentServiceTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDevopsagentServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDevopsagentServiceTagsOutputReference <a name="DataAwsccDevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_service

dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags">DataAwsccDevopsagentServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags">DataAwsccDevopsagentServiceTags</a>

---



