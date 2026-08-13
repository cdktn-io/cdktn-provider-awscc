# `customerprofilesCalculatedAttributeDefinition` Submodule <a name="`customerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesCalculatedAttributeDefinition <a name="CustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attribute_details: CustomerprofilesCalculatedAttributeDefinitionAttributeDetails,
  calculated_attribute_name: str,
  domain_name: str,
  statistic: str,
  conditions: CustomerprofilesCalculatedAttributeDefinitionConditions = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags] = None,
  use_historical_data: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.attributeDetails">attribute_details</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.calculatedAttributeName">calculated_attribute_name</a></code> | <code>str</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.statistic">statistic</a></code> | <code>str</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.useHistoricalData">use_historical_data</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use historical data for the calculated attribute. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_details`<sup>Required</sup> <a name="attribute_details" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.attributeDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `calculated_attribute_name`<sup>Required</sup> <a name="calculated_attribute_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.calculatedAttributeName"></a>

- *Type:* str

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.statistic"></a>

- *Type:* str

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.description"></a>

- *Type:* str

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `use_historical_data`<sup>Optional</sup> <a name="use_historical_data" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.useHistoricalData"></a>

- *Type:* bool | cdktn.IResolvable

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails">put_attribute_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData">reset_use_historical_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attribute_details` <a name="put_attribute_details" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails"></a>

```python
def put_attribute_details(
  attributes: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes],
  expression: str
) -> None
```

###### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails.parameter.attributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]

A list of attribute items specified in the mathematical expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CustomerprofilesCalculatedAttributeDefinition#attributes}

---

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails.parameter.expression"></a>

- *Type:* str

Mathematical expression that is performed on attribute items provided in the attribute list.

Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CustomerprofilesCalculatedAttributeDefinition#expression}

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions"></a>

```python
def put_conditions(
  object_count: typing.Union[int, float] = None,
  range: CustomerprofilesCalculatedAttributeDefinitionConditionsRange = None,
  threshold: CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold = None
) -> None
```

###### `object_count`<sup>Optional</sup> <a name="object_count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.objectCount"></a>

- *Type:* typing.Union[int, float]

The number of profile objects used for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CustomerprofilesCalculatedAttributeDefinition#object_count}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.range"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

The relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#range CustomerprofilesCalculatedAttributeDefinition#range}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.threshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

The threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CustomerprofilesCalculatedAttributeDefinition#threshold}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_historical_data` <a name="reset_use_historical_data" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData"></a>

```python
def reset_use_historical_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesCalculatedAttributeDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">attribute_details</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness">readiness</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput">attribute_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput">calculated_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput">use_historical_data_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">calculated_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">use_historical_data</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_details`<sup>Required</sup> <a name="attribute_details" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```python
attribute_details: CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```python
conditions: CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `readiness`<sup>Required</sup> <a name="readiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```python
readiness: CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```python
tags: CustomerprofilesCalculatedAttributeDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `attribute_details_input`<sup>Optional</sup> <a name="attribute_details_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput"></a>

```python
attribute_details_input: IResolvable | CustomerprofilesCalculatedAttributeDefinitionAttributeDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `calculated_attribute_name_input`<sup>Optional</sup> <a name="calculated_attribute_name_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput"></a>

```python
calculated_attribute_name_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput"></a>

```python
conditions_input: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]

---

##### `use_historical_data_input`<sup>Optional</sup> <a name="use_historical_data_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput"></a>

```python
use_historical_data_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `calculated_attribute_name`<sup>Required</sup> <a name="calculated_attribute_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```python
calculated_attribute_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `use_historical_data`<sup>Required</sup> <a name="use_historical_data" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```python
use_historical_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails(
  attributes: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes],
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]</code> | A list of attribute items specified in the mathematical expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression">expression</a></code> | <code>str</code> | Mathematical expression that is performed on attribute items provided in the attribute list. |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes"></a>

```python
attributes: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]

A list of attribute items specified in the mathematical expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CustomerprofilesCalculatedAttributeDefinition#attributes}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression"></a>

```python
expression: str
```

- *Type:* str

Mathematical expression that is performed on attribute items provided in the attribute list.

Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CustomerprofilesCalculatedAttributeDefinition#expression}

---

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name">name</a></code> | <code>str</code> | The name of an attribute defined in a profile object type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an attribute defined in a profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#name CustomerprofilesCalculatedAttributeDefinition#name}

---

### CustomerprofilesCalculatedAttributeDefinitionConditions <a name="CustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions(
  object_count: typing.Union[int, float] = None,
  range: CustomerprofilesCalculatedAttributeDefinitionConditionsRange = None,
  threshold: CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount">object_count</a></code> | <code>typing.Union[int, float]</code> | The number of profile objects used for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | The relative time period over which data is included in the aggregation. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | The threshold for the calculated attribute. |

---

##### `object_count`<sup>Optional</sup> <a name="object_count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount"></a>

```python
object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of profile objects used for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CustomerprofilesCalculatedAttributeDefinition#object_count}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range"></a>

```python
range: CustomerprofilesCalculatedAttributeDefinitionConditionsRange
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

The relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#range CustomerprofilesCalculatedAttributeDefinition#range}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold"></a>

```python
threshold: CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

The threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CustomerprofilesCalculatedAttributeDefinition#threshold}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange(
  timestamp_format: str = None,
  timestamp_source: str = None,
  unit: str = None,
  value: typing.Union[int, float] = None,
  value_range: CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | The format the timestamp field in your JSON object is specified. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource">timestamp_source</a></code> | <code>str</code> | An expression specifying the field in your JSON object from which the date should be parsed. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit">unit</a></code> | <code>str</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The amount of time of the specified unit. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | A structure specifying the endpoints of the relative time period over which data is included in the aggregation. |

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

The format the timestamp field in your JSON object is specified.

This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CustomerprofilesCalculatedAttributeDefinition#timestamp_format}

---

##### `timestamp_source`<sup>Optional</sup> <a name="timestamp_source" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource"></a>

```python
timestamp_source: str
```

- *Type:* str

An expression specifying the field in your JSON object from which the date should be parsed.

The expression should follow the structure of "{ObjectTypeName.<Location of timestamp field in JSON pointer format>}". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CustomerprofilesCalculatedAttributeDefinition#timestamp_source}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CustomerprofilesCalculatedAttributeDefinition#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

##### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange"></a>

```python
value_range: CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

A structure specifying the endpoints of the relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CustomerprofilesCalculatedAttributeDefinition#value_range}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange(
  end: typing.Union[int, float] = None,
  start: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | The ending point for this range. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | The starting point for this range. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ending point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#end CustomerprofilesCalculatedAttributeDefinition#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The starting point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#start CustomerprofilesCalculatedAttributeDefinition#start}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold(
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator">operator</a></code> | <code>str</code> | The operator of the threshold. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value">value</a></code> | <code>str</code> | The value of the threshold. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CustomerprofilesCalculatedAttributeDefinition#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

### CustomerprofilesCalculatedAttributeDefinitionConfig <a name="CustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attribute_details: CustomerprofilesCalculatedAttributeDefinitionAttributeDetails,
  calculated_attribute_name: str,
  domain_name: str,
  statistic: str,
  conditions: CustomerprofilesCalculatedAttributeDefinitionConditions = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags] = None,
  use_historical_data: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails">attribute_details</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName">calculated_attribute_name</a></code> | <code>str</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic">statistic</a></code> | <code>str</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description">description</a></code> | <code>str</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData">use_historical_data</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use historical data for the calculated attribute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_details`<sup>Required</sup> <a name="attribute_details" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails"></a>

```python
attribute_details: CustomerprofilesCalculatedAttributeDefinitionAttributeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `calculated_attribute_name`<sup>Required</sup> <a name="calculated_attribute_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName"></a>

```python
calculated_attribute_name: str
```

- *Type:* str

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions"></a>

```python
conditions: CustomerprofilesCalculatedAttributeDefinitionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `use_historical_data`<sup>Optional</sup> <a name="use_historical_data" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData"></a>

```python
use_historical_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

### CustomerprofilesCalculatedAttributeDefinitionReadiness <a name="CustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness()
```


### CustomerprofilesCalculatedAttributeDefinitionTags <a name="CustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#key CustomerprofilesCalculatedAttributeDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```python
attributes: CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionAttributeDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount">reset_object_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange"></a>

```python
def put_range(
  timestamp_format: str = None,
  timestamp_source: str = None,
  unit: str = None,
  value: typing.Union[int, float] = None,
  value_range: CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange = None
) -> None
```

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.timestampFormat"></a>

- *Type:* str

The format the timestamp field in your JSON object is specified.

This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CustomerprofilesCalculatedAttributeDefinition#timestamp_format}

---

###### `timestamp_source`<sup>Optional</sup> <a name="timestamp_source" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.timestampSource"></a>

- *Type:* str

An expression specifying the field in your JSON object from which the date should be parsed.

The expression should follow the structure of "{ObjectTypeName.<Location of timestamp field in JSON pointer format>}". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CustomerprofilesCalculatedAttributeDefinition#timestamp_source}

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.unit"></a>

- *Type:* str

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CustomerprofilesCalculatedAttributeDefinition#unit}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.value"></a>

- *Type:* typing.Union[int, float]

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

###### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.valueRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

A structure specifying the endpoints of the relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CustomerprofilesCalculatedAttributeDefinition#value_range}

---

##### `put_threshold` <a name="put_threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold"></a>

```python
def put_threshold(
  operator: str = None,
  value: str = None
) -> None
```

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

The operator of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CustomerprofilesCalculatedAttributeDefinition#operator}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold.parameter.value"></a>

- *Type:* str

The value of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

##### `reset_object_count` <a name="reset_object_count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount"></a>

```python
def reset_object_count() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput">object_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput">range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput">threshold_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```python
range: CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```python
threshold: CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `object_count_input`<sup>Optional</sup> <a name="object_count_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput"></a>

```python
object_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput"></a>

```python
range_input: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput"></a>

```python
threshold_input: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `object_count`<sup>Required</sup> <a name="object_count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```python
object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange">put_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource">reset_timestamp_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange">reset_value_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_range` <a name="put_value_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange"></a>

```python
def put_value_range(
  end: typing.Union[int, float] = None,
  start: typing.Union[int, float] = None
) -> None
```

###### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

The ending point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#end CustomerprofilesCalculatedAttributeDefinition#end}

---

###### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

The starting point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#start CustomerprofilesCalculatedAttributeDefinition#start}

---

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_timestamp_source` <a name="reset_timestamp_source" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource"></a>

```python
def reset_timestamp_source() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_range` <a name="reset_value_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange"></a>

```python
def reset_value_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput">timestamp_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput">value_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">timestamp_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_range`<sup>Required</sup> <a name="value_range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```python
value_range: CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `timestamp_source_input`<sup>Optional</sup> <a name="timestamp_source_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput"></a>

```python
timestamp_source_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value_range_input`<sup>Optional</sup> <a name="value_range_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput"></a>

```python
value_range_input: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `timestamp_source`<sup>Required</sup> <a name="timestamp_source" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```python
timestamp_source: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end` <a name="reset_end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---


### CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">progress_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `progress_percentage`<sup>Required</sup> <a name="progress_percentage" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```python
progress_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesCalculatedAttributeDefinitionReadiness
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### CustomerprofilesCalculatedAttributeDefinitionTagsList <a name="CustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesCalculatedAttributeDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>]

---


### CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_calculated_attribute_definition

customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesCalculatedAttributeDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>

---



