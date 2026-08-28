# `dataAwsccCodedeployDeploymentConfig` Submodule <a name="`dataAwsccCodedeployDeploymentConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodedeployDeploymentConfig <a name="DataAwsccCodedeployDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config awscc_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodedeployDeploymentConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts">minimum_healthy_hosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig">traffic_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig">zonal_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `deployment_config_name`<sup>Required</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName"></a>

```python
deployment_config_name: str
```

- *Type:* str

---

##### `minimum_healthy_hosts`<sup>Required</sup> <a name="minimum_healthy_hosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```python
minimum_healthy_hosts: DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `traffic_routing_config`<sup>Required</sup> <a name="traffic_routing_config" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```python
traffic_routing_config: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `zonal_config`<sup>Required</sup> <a name="zonal_config" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig"></a>

```python
zonal_config: DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodedeployDeploymentConfigConfig <a name="DataAwsccCodedeployDeploymentConfigConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts()
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig()
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary()
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear()
```


### DataAwsccCodedeployDeploymentConfigZonalConfig <a name="DataAwsccCodedeployDeploymentConfigZonalConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig()
```


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">time_based_canary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">time_based_linear</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_based_canary`<sup>Required</sup> <a name="time_based_canary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```python
time_based_canary: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `time_based_linear`<sup>Required</sup> <a name="time_based_linear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```python
time_based_linear: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval">canary_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage">canary_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canary_interval`<sup>Required</sup> <a name="canary_interval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval"></a>

```python
canary_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `canary_percentage`<sup>Required</sup> <a name="canary_percentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage"></a>

```python
canary_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval">linear_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage">linear_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linear_interval`<sup>Required</sup> <a name="linear_interval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval"></a>

```python
linear_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linear_percentage`<sup>Required</sup> <a name="linear_percentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage"></a>

```python
linear_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codedeploy_deployment_config

dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">first_zone_monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">minimum_healthy_hosts_per_zone</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_zone_monitor_duration_in_seconds`<sup>Required</sup> <a name="first_zone_monitor_duration_in_seconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```python
first_zone_monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_healthy_hosts_per_zone`<sup>Required</sup> <a name="minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```python
minimum_healthy_hosts_per_zone: DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `monitor_duration_in_seconds`<sup>Required</sup> <a name="monitor_duration_in_seconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```python
monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodedeployDeploymentConfigZonalConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a>

---



