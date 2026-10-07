# `licensemanagerReportGenerator` Submodule <a name="`licensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.licensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerReportGenerator <a name="LicensemanagerReportGenerator" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGenerator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  report_context: LicensemanagerReportGeneratorReportContext,
  report_frequency: LicensemanagerReportGeneratorReportFrequency,
  report_generator_name: str,
  report_type: typing.List[str],
  description: str = None,
  tags: IResolvable | typing.List[LicensemanagerReportGeneratorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportContext">report_context</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportFrequency">report_frequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportGeneratorName">report_generator_name</a></code> | <code>str</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportType">report_type</a></code> | <code>typing.List[str]</code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `report_context`<sup>Required</sup> <a name="report_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportContext"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `report_frequency`<sup>Required</sup> <a name="report_frequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportFrequency"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `report_generator_name`<sup>Required</sup> <a name="report_generator_name" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportGeneratorName"></a>

- *Type:* str

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.reportType"></a>

- *Type:* typing.List[str]

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.description"></a>

- *Type:* str

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext">put_report_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency">put_report_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_report_context` <a name="put_report_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext"></a>

```python
def put_report_context(
  license_asset_group_arns: typing.List[str] = None,
  license_configuration_arns: typing.List[str] = None,
  report_end_date: str = None,
  report_start_date: str = None
) -> None
```

###### `license_asset_group_arns`<sup>Optional</sup> <a name="license_asset_group_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.licenseAssetGroupArns"></a>

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

###### `license_configuration_arns`<sup>Optional</sup> <a name="license_configuration_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.licenseConfigurationArns"></a>

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

###### `report_end_date`<sup>Optional</sup> <a name="report_end_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.reportEndDate"></a>

- *Type:* str

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

###### `report_start_date`<sup>Optional</sup> <a name="report_start_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.reportStartDate"></a>

- *Type:* str

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

##### `put_report_frequency` <a name="put_report_frequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency"></a>

```python
def put_report_frequency(
  period: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.period"></a>

- *Type:* str

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.value"></a>

- *Type:* typing.Union[int, float]

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerReportGeneratorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGenerator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGenerator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGenerator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGenerator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerReportGenerator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext">report_context</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount">report_creator_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency">report_frequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput">report_context_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput">report_frequency_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput">report_generator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput">report_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName">report_generator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType">report_type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `report_context`<sup>Required</sup> <a name="report_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext"></a>

```python
report_context: LicensemanagerReportGeneratorReportContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `report_creator_account`<sup>Required</sup> <a name="report_creator_account" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```python
report_creator_account: str
```

- *Type:* str

---

##### `report_frequency`<sup>Required</sup> <a name="report_frequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency"></a>

```python
report_frequency: LicensemanagerReportGeneratorReportFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location"></a>

```python
s3_location: LicensemanagerReportGeneratorS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags"></a>

```python
tags: LicensemanagerReportGeneratorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `report_context_input`<sup>Optional</sup> <a name="report_context_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput"></a>

```python
report_context_input: IResolvable | LicensemanagerReportGeneratorReportContext
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `report_frequency_input`<sup>Optional</sup> <a name="report_frequency_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput"></a>

```python
report_frequency_input: IResolvable | LicensemanagerReportGeneratorReportFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `report_generator_name_input`<sup>Optional</sup> <a name="report_generator_name_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput"></a>

```python
report_generator_name_input: str
```

- *Type:* str

---

##### `report_type_input`<sup>Optional</sup> <a name="report_type_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput"></a>

```python
report_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerReportGeneratorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `report_generator_name`<sup>Required</sup> <a name="report_generator_name" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName"></a>

```python
report_generator_name: str
```

- *Type:* str

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType"></a>

```python
report_type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerReportGeneratorConfig <a name="LicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  report_context: LicensemanagerReportGeneratorReportContext,
  report_frequency: LicensemanagerReportGeneratorReportFrequency,
  report_generator_name: str,
  report_type: typing.List[str],
  description: str = None,
  tags: IResolvable | typing.List[LicensemanagerReportGeneratorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext">report_context</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency">report_frequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName">report_generator_name</a></code> | <code>str</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType">report_type</a></code> | <code>typing.List[str]</code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description">description</a></code> | <code>str</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `report_context`<sup>Required</sup> <a name="report_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext"></a>

```python
report_context: LicensemanagerReportGeneratorReportContext
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `report_frequency`<sup>Required</sup> <a name="report_frequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency"></a>

```python
report_frequency: LicensemanagerReportGeneratorReportFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `report_generator_name`<sup>Required</sup> <a name="report_generator_name" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName"></a>

```python
report_generator_name: str
```

- *Type:* str

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType"></a>

```python
report_type: typing.List[str]
```

- *Type:* typing.List[str]

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerReportGeneratorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

### LicensemanagerReportGeneratorReportContext <a name="LicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext(
  license_asset_group_arns: typing.List[str] = None,
  license_configuration_arns: typing.List[str] = None,
  report_end_date: str = None,
  report_start_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns">license_asset_group_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of the license asset groups to include in the report. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns">license_configuration_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of the license configurations that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate">report_end_date</a></code> | <code>str</code> | End date for the report data collection period. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate">report_start_date</a></code> | <code>str</code> | Start date for the report data collection period. |

---

##### `license_asset_group_arns`<sup>Optional</sup> <a name="license_asset_group_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns"></a>

```python
license_asset_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

##### `license_configuration_arns`<sup>Optional</sup> <a name="license_configuration_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns"></a>

```python
license_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

##### `report_end_date`<sup>Optional</sup> <a name="report_end_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate"></a>

```python
report_end_date: str
```

- *Type:* str

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

##### `report_start_date`<sup>Optional</sup> <a name="report_start_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate"></a>

```python
report_start_date: str
```

- *Type:* str

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

### LicensemanagerReportGeneratorReportFrequency <a name="LicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency(
  period: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period">period</a></code> | <code>str</code> | Time period between each report. The period can be daily, weekly, or monthly. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Number of times within the frequency period that a report is generated. The only supported value is 1. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period"></a>

```python
period: str
```

- *Type:* str

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

### LicensemanagerReportGeneratorS3Location <a name="LicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location()
```


### LicensemanagerReportGeneratorTags <a name="LicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key LicensemanagerReportGenerator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerReportGeneratorReportContextOutputReference <a name="LicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns">reset_license_asset_group_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns">reset_license_configuration_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate">reset_report_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate">reset_report_start_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_license_asset_group_arns` <a name="reset_license_asset_group_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns"></a>

```python
def reset_license_asset_group_arns() -> None
```

##### `reset_license_configuration_arns` <a name="reset_license_configuration_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns"></a>

```python
def reset_license_configuration_arns() -> None
```

##### `reset_report_end_date` <a name="reset_report_end_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate"></a>

```python
def reset_report_end_date() -> None
```

##### `reset_report_start_date` <a name="reset_report_start_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate"></a>

```python
def reset_report_start_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput">license_asset_group_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput">license_configuration_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput">report_end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput">report_start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">license_asset_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">license_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">report_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">report_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_asset_group_arns_input`<sup>Optional</sup> <a name="license_asset_group_arns_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput"></a>

```python
license_asset_group_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license_configuration_arns_input`<sup>Optional</sup> <a name="license_configuration_arns_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput"></a>

```python
license_configuration_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_end_date_input`<sup>Optional</sup> <a name="report_end_date_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput"></a>

```python
report_end_date_input: str
```

- *Type:* str

---

##### `report_start_date_input`<sup>Optional</sup> <a name="report_start_date_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput"></a>

```python
report_start_date_input: str
```

- *Type:* str

---

##### `license_asset_group_arns`<sup>Required</sup> <a name="license_asset_group_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```python
license_asset_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license_configuration_arns`<sup>Required</sup> <a name="license_configuration_arns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```python
license_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_end_date`<sup>Required</sup> <a name="report_end_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```python
report_end_date: str
```

- *Type:* str

---

##### `report_start_date`<sup>Required</sup> <a name="report_start_date" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```python
report_start_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerReportGeneratorReportContext
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---


### LicensemanagerReportGeneratorReportFrequencyOutputReference <a name="LicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerReportGeneratorReportFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---


### LicensemanagerReportGeneratorS3LocationOutputReference <a name="LicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: LicensemanagerReportGeneratorS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a>

---


### LicensemanagerReportGeneratorTagsList <a name="LicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerReportGeneratorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerReportGeneratorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>]

---


### LicensemanagerReportGeneratorTagsOutputReference <a name="LicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_report_generator

licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerReportGeneratorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>

---



