# `configConfigurationAggregator` Submodule <a name="`configConfigurationAggregator` Submodule" id="@cdktn/provider-awscc.configConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationAggregator <a name="ConfigConfigurationAggregator" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator awscc_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_aggregation_sources: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources] = None,
  configuration_aggregator_name: str = None,
  organization_aggregation_source: ConfigConfigurationAggregatorOrganizationAggregationSource = None,
  tags: IResolvable | typing.List[ConfigConfigurationAggregatorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.accountAggregationSources">account_aggregation_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.configurationAggregatorName">configuration_aggregator_name</a></code> | <code>str</code> | The name of the aggregator. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.organizationAggregationSource">organization_aggregation_source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]</code> | The tags for the configuration aggregator. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_aggregation_sources`<sup>Optional</sup> <a name="account_aggregation_sources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.accountAggregationSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}.

---

##### `configuration_aggregator_name`<sup>Optional</sup> <a name="configuration_aggregator_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.configurationAggregatorName"></a>

- *Type:* str

The name of the aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#configuration_aggregator_name ConfigConfigurationAggregator#configuration_aggregator_name}

---

##### `organization_aggregation_source`<sup>Optional</sup> <a name="organization_aggregation_source" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.organizationAggregationSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]

The tags for the configuration aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources">put_account_aggregation_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource">put_organization_aggregation_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources">reset_account_aggregation_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName">reset_configuration_aggregator_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource">reset_organization_aggregation_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_account_aggregation_sources` <a name="put_account_aggregation_sources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources"></a>

```python
def put_account_aggregation_sources(
  value: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]

---

##### `put_organization_aggregation_source` <a name="put_organization_aggregation_source" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource"></a>

```python
def put_organization_aggregation_source(
  all_aws_regions: bool | IResolvable = None,
  aws_regions: typing.List[str] = None,
  role_arn: str = None
) -> None
```

###### `all_aws_regions`<sup>Optional</sup> <a name="all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.allAwsRegions"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConfigConfigurationAggregatorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]

---

##### `reset_account_aggregation_sources` <a name="reset_account_aggregation_sources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources"></a>

```python
def reset_account_aggregation_sources() -> None
```

##### `reset_configuration_aggregator_name` <a name="reset_configuration_aggregator_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName"></a>

```python
def reset_configuration_aggregator_name() -> None
```

##### `reset_organization_aggregation_source` <a name="reset_organization_aggregation_source" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource"></a>

```python
def reset_organization_aggregation_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigConfigurationAggregator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigConfigurationAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources">account_aggregation_sources</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn">configuration_aggregator_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource">organization_aggregation_source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput">account_aggregation_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput">configuration_aggregator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput">organization_aggregation_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName">configuration_aggregator_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_aggregation_sources`<sup>Required</sup> <a name="account_aggregation_sources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources"></a>

```python
account_aggregation_sources: ConfigConfigurationAggregatorAccountAggregationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a>

---

##### `configuration_aggregator_arn`<sup>Required</sup> <a name="configuration_aggregator_arn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn"></a>

```python
configuration_aggregator_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_aggregation_source`<sup>Required</sup> <a name="organization_aggregation_source" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```python
organization_aggregation_source: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags"></a>

```python
tags: ConfigConfigurationAggregatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a>

---

##### `account_aggregation_sources_input`<sup>Optional</sup> <a name="account_aggregation_sources_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput"></a>

```python
account_aggregation_sources_input: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]

---

##### `configuration_aggregator_name_input`<sup>Optional</sup> <a name="configuration_aggregator_name_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput"></a>

```python
configuration_aggregator_name_input: str
```

- *Type:* str

---

##### `organization_aggregation_source_input`<sup>Optional</sup> <a name="organization_aggregation_source_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput"></a>

```python
organization_aggregation_source_input: IResolvable | ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConfigConfigurationAggregatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]

---

##### `configuration_aggregator_name`<sup>Required</sup> <a name="configuration_aggregator_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName"></a>

```python
configuration_aggregator_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationAggregatorAccountAggregationSources <a name="ConfigConfigurationAggregatorAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources(
  account_ids: typing.List[str] = None,
  all_aws_regions: bool | IResolvable = None,
  aws_regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions">all_aws_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}.

---

##### `all_aws_regions`<sup>Optional</sup> <a name="all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions"></a>

```python
all_aws_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

### ConfigConfigurationAggregatorConfig <a name="ConfigConfigurationAggregatorConfig" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_aggregation_sources: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources] = None,
  configuration_aggregator_name: str = None,
  organization_aggregation_source: ConfigConfigurationAggregatorOrganizationAggregationSource = None,
  tags: IResolvable | typing.List[ConfigConfigurationAggregatorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources">account_aggregation_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName">configuration_aggregator_name</a></code> | <code>str</code> | The name of the aggregator. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource">organization_aggregation_source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]</code> | The tags for the configuration aggregator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_aggregation_sources`<sup>Optional</sup> <a name="account_aggregation_sources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources"></a>

```python
account_aggregation_sources: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}.

---

##### `configuration_aggregator_name`<sup>Optional</sup> <a name="configuration_aggregator_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName"></a>

```python
configuration_aggregator_name: str
```

- *Type:* str

The name of the aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#configuration_aggregator_name ConfigConfigurationAggregator#configuration_aggregator_name}

---

##### `organization_aggregation_source`<sup>Optional</sup> <a name="organization_aggregation_source" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource"></a>

```python
organization_aggregation_source: ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConfigConfigurationAggregatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]

The tags for the configuration aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}

---

### ConfigConfigurationAggregatorOrganizationAggregationSource <a name="ConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource(
  all_aws_regions: bool | IResolvable = None,
  aws_regions: typing.List[str] = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions">all_aws_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}. |

---

##### `all_aws_regions`<sup>Optional</sup> <a name="all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions"></a>

```python
all_aws_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

### ConfigConfigurationAggregatorTags <a name="ConfigConfigurationAggregatorTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#key ConfigConfigurationAggregator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#value ConfigConfigurationAggregator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationAggregatorAccountAggregationSourcesList <a name="ConfigConfigurationAggregatorAccountAggregationSourcesList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConfigurationAggregatorAccountAggregationSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>]

---


### ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference <a name="ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds">reset_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions">reset_all_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_ids` <a name="reset_account_ids" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds"></a>

```python
def reset_account_ids() -> None
```

##### `reset_all_aws_regions` <a name="reset_all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions"></a>

```python
def reset_all_aws_regions() -> None
```

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput">account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput">all_aws_regions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions">all_aws_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids_input`<sup>Optional</sup> <a name="account_ids_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput"></a>

```python
account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_aws_regions_input`<sup>Optional</sup> <a name="all_aws_regions_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput"></a>

```python
all_aws_regions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_aws_regions`<sup>Required</sup> <a name="all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions"></a>

```python
all_aws_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>

---


### ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions">reset_all_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_aws_regions` <a name="reset_all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions"></a>

```python
def reset_all_aws_regions() -> None
```

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput">all_aws_regions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions">all_aws_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_aws_regions_input`<sup>Optional</sup> <a name="all_aws_regions_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput"></a>

```python
all_aws_regions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `all_aws_regions`<sup>Required</sup> <a name="all_aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions"></a>

```python
all_aws_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---


### ConfigConfigurationAggregatorTagsList <a name="ConfigConfigurationAggregatorTagsList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigurationAggregatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConfigurationAggregatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>]

---


### ConfigConfigurationAggregatorTagsOutputReference <a name="ConfigConfigurationAggregatorTagsOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_aggregator

configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationAggregatorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>

---



