# `customerprofilesIntegration` Submodule <a name="`customerprofilesIntegration` Submodule" id="@cdktn/provider-awscc.customerprofilesIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesIntegration <a name="CustomerprofilesIntegration" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration awscc_customerprofiles_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  event_trigger_names: typing.List[str] = None,
  flow_definition: CustomerprofilesIntegrationFlowDefinition = None,
  object_type_name: str = None,
  object_type_names: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames] = None,
  scope: str = None,
  tags: IResolvable | typing.List[CustomerprofilesIntegrationTags] = None,
  uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.eventTriggerNames">event_trigger_names</a></code> | <code>typing.List[str]</code> | A list of unique names for active event triggers associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.flowDefinition">flow_definition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the ObjectType defined for the 3rd party data in Profile Service. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.objectTypeNames">object_type_names</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]</code> | The mapping between 3rd party event types and ObjectType names. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Scope of the integration, such as 'PROFILE' or 'DOMAIN'. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.uri">uri</a></code> | <code>str</code> | The URI of the S3 bucket or any other type of data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#domain_name CustomerprofilesIntegration#domain_name}

---

##### `event_trigger_names`<sup>Optional</sup> <a name="event_trigger_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.eventTriggerNames"></a>

- *Type:* typing.List[str]

A list of unique names for active event triggers associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#event_trigger_names CustomerprofilesIntegration#event_trigger_names}

---

##### `flow_definition`<sup>Optional</sup> <a name="flow_definition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.flowDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}.

---

##### `object_type_name`<sup>Optional</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.objectTypeName"></a>

- *Type:* str

The name of the ObjectType defined for the 3rd party data in Profile Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_name CustomerprofilesIntegration#object_type_name}

---

##### `object_type_names`<sup>Optional</sup> <a name="object_type_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.objectTypeNames"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]

The mapping between 3rd party event types and ObjectType names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_names CustomerprofilesIntegration#object_type_names}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope"></a>

- *Type:* str

Scope of the integration, such as 'PROFILE' or 'DOMAIN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scope CustomerprofilesIntegration#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tags CustomerprofilesIntegration#tags}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.uri"></a>

- *Type:* str

The URI of the S3 bucket or any other type of data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#uri CustomerprofilesIntegration#uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition">put_flow_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames">put_object_type_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames">reset_event_trigger_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition">reset_flow_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName">reset_object_type_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames">reset_object_type_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri">reset_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_flow_definition` <a name="put_flow_definition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition"></a>

```python
def put_flow_definition(
  description: str = None,
  flow_name: str = None,
  kms_arn: str = None,
  source_flow_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig = None,
  tasks: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks] = None,
  trigger_config: CustomerprofilesIntegrationFlowDefinitionTriggerConfig = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}.

---

###### `flow_name`<sup>Optional</sup> <a name="flow_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.flowName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}.

---

###### `kms_arn`<sup>Optional</sup> <a name="kms_arn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.kmsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}.

---

###### `source_flow_config`<sup>Optional</sup> <a name="source_flow_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.sourceFlowConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}.

---

###### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.tasks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}.

---

###### `trigger_config`<sup>Optional</sup> <a name="trigger_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.triggerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}.

---

##### `put_object_type_names` <a name="put_object_type_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames"></a>

```python
def put_object_type_names(
  value: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesIntegrationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]

---

##### `reset_event_trigger_names` <a name="reset_event_trigger_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames"></a>

```python
def reset_event_trigger_names() -> None
```

##### `reset_flow_definition` <a name="reset_flow_definition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition"></a>

```python
def reset_flow_definition() -> None
```

##### `reset_object_type_name` <a name="reset_object_type_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName"></a>

```python
def reset_object_type_name() -> None
```

##### `reset_object_type_names` <a name="reset_object_type_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames"></a>

```python
def reset_object_type_names() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri"></a>

```python
def reset_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition">flow_definition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames">object_type_names</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput">event_trigger_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput">flow_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput">object_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput">object_type_names_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames">event_trigger_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName">object_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri">uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `flow_definition`<sup>Required</sup> <a name="flow_definition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition"></a>

```python
flow_definition: CustomerprofilesIntegrationFlowDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `object_type_names`<sup>Required</sup> <a name="object_type_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames"></a>

```python
object_type_names: CustomerprofilesIntegrationObjectTypeNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags"></a>

```python
tags: CustomerprofilesIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `event_trigger_names_input`<sup>Optional</sup> <a name="event_trigger_names_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput"></a>

```python
event_trigger_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `flow_definition_input`<sup>Optional</sup> <a name="flow_definition_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput"></a>

```python
flow_definition_input: IResolvable | CustomerprofilesIntegrationFlowDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---

##### `object_type_name_input`<sup>Optional</sup> <a name="object_type_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput"></a>

```python
object_type_name_input: str
```

- *Type:* str

---

##### `object_type_names_input`<sup>Optional</sup> <a name="object_type_names_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput"></a>

```python
object_type_names_input: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `event_trigger_names`<sup>Required</sup> <a name="event_trigger_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames"></a>

```python
event_trigger_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesIntegrationConfig <a name="CustomerprofilesIntegrationConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  event_trigger_names: typing.List[str] = None,
  flow_definition: CustomerprofilesIntegrationFlowDefinition = None,
  object_type_name: str = None,
  object_type_names: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames] = None,
  scope: str = None,
  tags: IResolvable | typing.List[CustomerprofilesIntegrationTags] = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames">event_trigger_names</a></code> | <code>typing.List[str]</code> | A list of unique names for active event triggers associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition">flow_definition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the ObjectType defined for the 3rd party data in Profile Service. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames">object_type_names</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]</code> | The mapping between 3rd party event types and ObjectType names. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope">scope</a></code> | <code>str</code> | Scope of the integration, such as 'PROFILE' or 'DOMAIN'. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri">uri</a></code> | <code>str</code> | The URI of the S3 bucket or any other type of data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#domain_name CustomerprofilesIntegration#domain_name}

---

##### `event_trigger_names`<sup>Optional</sup> <a name="event_trigger_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames"></a>

```python
event_trigger_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of unique names for active event triggers associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#event_trigger_names CustomerprofilesIntegration#event_trigger_names}

---

##### `flow_definition`<sup>Optional</sup> <a name="flow_definition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition"></a>

```python
flow_definition: CustomerprofilesIntegrationFlowDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}.

---

##### `object_type_name`<sup>Optional</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

The name of the ObjectType defined for the 3rd party data in Profile Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_name CustomerprofilesIntegration#object_type_name}

---

##### `object_type_names`<sup>Optional</sup> <a name="object_type_names" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames"></a>

```python
object_type_names: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]

The mapping between 3rd party event types and ObjectType names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_names CustomerprofilesIntegration#object_type_names}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Scope of the integration, such as 'PROFILE' or 'DOMAIN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scope CustomerprofilesIntegration#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tags CustomerprofilesIntegration#tags}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the S3 bucket or any other type of data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#uri CustomerprofilesIntegration#uri}

---

### CustomerprofilesIntegrationFlowDefinition <a name="CustomerprofilesIntegrationFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition(
  description: str = None,
  flow_name: str = None,
  kms_arn: str = None,
  source_flow_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig = None,
  tasks: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks] = None,
  trigger_config: CustomerprofilesIntegrationFlowDefinitionTriggerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName">flow_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn">kms_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig">source_flow_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks">tasks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig">trigger_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}.

---

##### `flow_name`<sup>Optional</sup> <a name="flow_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName"></a>

```python
flow_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}.

---

##### `kms_arn`<sup>Optional</sup> <a name="kms_arn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}.

---

##### `source_flow_config`<sup>Optional</sup> <a name="source_flow_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig"></a>

```python
source_flow_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks"></a>

```python
tasks: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}.

---

##### `trigger_config`<sup>Optional</sup> <a name="trigger_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig"></a>

```python
trigger_config: CustomerprofilesIntegrationFlowDefinitionTriggerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig(
  connector_profile_name: str = None,
  connector_type: str = None,
  incremental_pull_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig = None,
  source_connector_properties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName">connector_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType">connector_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig">incremental_pull_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties">source_connector_properties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}. |

---

##### `connector_profile_name`<sup>Optional</sup> <a name="connector_profile_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName"></a>

```python
connector_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}.

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}.

---

##### `incremental_pull_config`<sup>Optional</sup> <a name="incremental_pull_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig"></a>

```python
incremental_pull_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}.

---

##### `source_connector_properties`<sup>Optional</sup> <a name="source_connector_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties"></a>

```python
source_connector_properties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig(
  datetime_type_field_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName">datetime_type_field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}. |

---

##### `datetime_type_field_name`<sup>Optional</sup> <a name="datetime_type_field_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName"></a>

```python
datetime_type_field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties(
  marketo: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo = None,
  s3: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 = None,
  salesforce: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce = None,
  service_now: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow = None,
  zendesk: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo">marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce">salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk">zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `marketo`<sup>Optional</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo"></a>

```python
marketo: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3"></a>

```python
s3: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `salesforce`<sup>Optional</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce"></a>

```python
salesforce: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow"></a>

```python
service_now: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `zendesk`<sup>Optional</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk"></a>

```python
zendesk: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo(
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3(
  bucket_name: str = None,
  bucket_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce(
  enable_dynamic_field_update: bool | IResolvable = None,
  include_deleted_records: bool | IResolvable = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate">enable_dynamic_field_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords">include_deleted_records</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `enable_dynamic_field_update`<sup>Optional</sup> <a name="enable_dynamic_field_update" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate"></a>

```python
enable_dynamic_field_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}.

---

##### `include_deleted_records`<sup>Optional</sup> <a name="include_deleted_records" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords"></a>

```python
include_deleted_records: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow(
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk(
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionTasks <a name="CustomerprofilesIntegrationFlowDefinitionTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks(
  connector_operator: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator = None,
  destination_field: str = None,
  source_fields: typing.List[str] = None,
  task_properties: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties] = None,
  task_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator">connector_operator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField">destination_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields">source_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties">task_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}. |

---

##### `connector_operator`<sup>Optional</sup> <a name="connector_operator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator"></a>

```python
connector_operator: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}.

---

##### `destination_field`<sup>Optional</sup> <a name="destination_field" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField"></a>

```python
destination_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}.

---

##### `source_fields`<sup>Optional</sup> <a name="source_fields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields"></a>

```python
source_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}.

---

##### `task_properties`<sup>Optional</sup> <a name="task_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties"></a>

```python
task_properties: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}.

---

##### `task_type`<sup>Optional</sup> <a name="task_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator(
  marketo: str = None,
  s3: str = None,
  salesforce: str = None,
  service_now: str = None,
  zendesk: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo">marketo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3">s3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce">salesforce</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow">service_now</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk">zendesk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `marketo`<sup>Optional</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo"></a>

```python
marketo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3"></a>

```python
s3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `salesforce`<sup>Optional</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce"></a>

```python
salesforce: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow"></a>

```python
service_now: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `zendesk`<sup>Optional</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk"></a>

```python
zendesk: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties(
  operator_property_key: str = None,
  property: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey">operator_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property">property</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}. |

---

##### `operator_property_key`<sup>Optional</sup> <a name="operator_property_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey"></a>

```python
operator_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}.

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property"></a>

```python
property: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfig <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig(
  trigger_properties: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties = None,
  trigger_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties">trigger_properties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType">trigger_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}. |

---

##### `trigger_properties`<sup>Optional</sup> <a name="trigger_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties"></a>

```python
trigger_properties: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}.

---

##### `trigger_type`<sup>Optional</sup> <a name="trigger_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties(
  scheduled: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled">scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}. |

---

##### `scheduled`<sup>Optional</sup> <a name="scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled"></a>

```python
scheduled: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled(
  data_pull_mode: str = None,
  first_execution_from: typing.Union[int, float] = None,
  schedule_end_time: typing.Union[int, float] = None,
  schedule_expression: str = None,
  schedule_offset: typing.Union[int, float] = None,
  schedule_start_time: typing.Union[int, float] = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode">data_pull_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom">first_execution_from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}. |

---

##### `data_pull_mode`<sup>Optional</sup> <a name="data_pull_mode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode"></a>

```python
data_pull_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}.

---

##### `first_execution_from`<sup>Optional</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom"></a>

```python
first_execution_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}.

---

##### `schedule_end_time`<sup>Optional</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}.

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}.

---

##### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}.

---

##### `schedule_start_time`<sup>Optional</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}.

---

### CustomerprofilesIntegrationObjectTypeNames <a name="CustomerprofilesIntegrationObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

### CustomerprofilesIntegrationTags <a name="CustomerprofilesIntegrationTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesIntegrationFlowDefinitionOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig">put_source_flow_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks">put_tasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig">put_trigger_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName">reset_flow_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn">reset_kms_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig">reset_source_flow_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks">reset_tasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig">reset_trigger_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_flow_config` <a name="put_source_flow_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig"></a>

```python
def put_source_flow_config(
  connector_profile_name: str = None,
  connector_type: str = None,
  incremental_pull_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig = None,
  source_connector_properties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties = None
) -> None
```

###### `connector_profile_name`<sup>Optional</sup> <a name="connector_profile_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.connectorProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}.

---

###### `connector_type`<sup>Optional</sup> <a name="connector_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.connectorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}.

---

###### `incremental_pull_config`<sup>Optional</sup> <a name="incremental_pull_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.incrementalPullConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}.

---

###### `source_connector_properties`<sup>Optional</sup> <a name="source_connector_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.sourceConnectorProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}.

---

##### `put_tasks` <a name="put_tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks"></a>

```python
def put_tasks(
  value: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]

---

##### `put_trigger_config` <a name="put_trigger_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig"></a>

```python
def put_trigger_config(
  trigger_properties: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties = None,
  trigger_type: str = None
) -> None
```

###### `trigger_properties`<sup>Optional</sup> <a name="trigger_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig.parameter.triggerProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}.

---

###### `trigger_type`<sup>Optional</sup> <a name="trigger_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig.parameter.triggerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_flow_name` <a name="reset_flow_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName"></a>

```python
def reset_flow_name() -> None
```

##### `reset_kms_arn` <a name="reset_kms_arn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn"></a>

```python
def reset_kms_arn() -> None
```

##### `reset_source_flow_config` <a name="reset_source_flow_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig"></a>

```python
def reset_source_flow_config() -> None
```

##### `reset_tasks` <a name="reset_tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks"></a>

```python
def reset_tasks() -> None
```

##### `reset_trigger_config` <a name="reset_trigger_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig"></a>

```python
def reset_trigger_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig">source_flow_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig">trigger_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput">flow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput">kms_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput">source_flow_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput">tasks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput">trigger_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName">flow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_flow_config`<sup>Required</sup> <a name="source_flow_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig"></a>

```python
source_flow_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks"></a>

```python
tasks: CustomerprofilesIntegrationFlowDefinitionTasksList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a>

---

##### `trigger_config`<sup>Required</sup> <a name="trigger_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig"></a>

```python
trigger_config: CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `flow_name_input`<sup>Optional</sup> <a name="flow_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput"></a>

```python
flow_name_input: str
```

- *Type:* str

---

##### `kms_arn_input`<sup>Optional</sup> <a name="kms_arn_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput"></a>

```python
kms_arn_input: str
```

- *Type:* str

---

##### `source_flow_config_input`<sup>Optional</sup> <a name="source_flow_config_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput"></a>

```python
source_flow_config_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---

##### `tasks_input`<sup>Optional</sup> <a name="tasks_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput"></a>

```python
tasks_input: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]

---

##### `trigger_config_input`<sup>Optional</sup> <a name="trigger_config_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput"></a>

```python
trigger_config_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flow_name`<sup>Required</sup> <a name="flow_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName"></a>

```python
flow_name: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName">reset_datetime_type_field_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datetime_type_field_name` <a name="reset_datetime_type_field_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName"></a>

```python
def reset_datetime_type_field_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput">datetime_type_field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName">datetime_type_field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datetime_type_field_name_input`<sup>Optional</sup> <a name="datetime_type_field_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput"></a>

```python
datetime_type_field_name_input: str
```

- *Type:* str

---

##### `datetime_type_field_name`<sup>Required</sup> <a name="datetime_type_field_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName"></a>

```python
datetime_type_field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig">put_incremental_pull_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties">put_source_connector_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName">reset_connector_profile_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig">reset_incremental_pull_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties">reset_source_connector_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_incremental_pull_config` <a name="put_incremental_pull_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig"></a>

```python
def put_incremental_pull_config(
  datetime_type_field_name: str = None
) -> None
```

###### `datetime_type_field_name`<sup>Optional</sup> <a name="datetime_type_field_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig.parameter.datetimeTypeFieldName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}.

---

##### `put_source_connector_properties` <a name="put_source_connector_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties"></a>

```python
def put_source_connector_properties(
  marketo: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo = None,
  s3: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 = None,
  salesforce: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce = None,
  service_now: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow = None,
  zendesk: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk = None
) -> None
```

###### `marketo`<sup>Optional</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.marketo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

###### `salesforce`<sup>Optional</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.salesforce"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

###### `zendesk`<sup>Optional</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.zendesk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

##### `reset_connector_profile_name` <a name="reset_connector_profile_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName"></a>

```python
def reset_connector_profile_name() -> None
```

##### `reset_connector_type` <a name="reset_connector_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_incremental_pull_config` <a name="reset_incremental_pull_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig"></a>

```python
def reset_incremental_pull_config() -> None
```

##### `reset_source_connector_properties` <a name="reset_source_connector_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties"></a>

```python
def reset_source_connector_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig">incremental_pull_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties">source_connector_properties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput">connector_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput">incremental_pull_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput">source_connector_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName">connector_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incremental_pull_config`<sup>Required</sup> <a name="incremental_pull_config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig"></a>

```python
incremental_pull_config: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a>

---

##### `source_connector_properties`<sup>Required</sup> <a name="source_connector_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties"></a>

```python
source_connector_properties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a>

---

##### `connector_profile_name_input`<sup>Optional</sup> <a name="connector_profile_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput"></a>

```python
connector_profile_name_input: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `incremental_pull_config_input`<sup>Optional</sup> <a name="incremental_pull_config_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput"></a>

```python
incremental_pull_config_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---

##### `source_connector_properties_input`<sup>Optional</sup> <a name="source_connector_properties_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput"></a>

```python
source_connector_properties_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---

##### `connector_profile_name`<sup>Required</sup> <a name="connector_profile_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName"></a>

```python
connector_profile_name: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object` <a name="reset_object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo">put_marketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce">put_salesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk">put_zendesk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo">reset_marketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce">reset_salesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk">reset_zendesk</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_marketo` <a name="put_marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo"></a>

```python
def put_marketo(
  object: str = None
) -> None
```

###### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3"></a>

```python
def put_s3(
  bucket_name: str = None,
  bucket_prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}.

---

###### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}.

---

##### `put_salesforce` <a name="put_salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce"></a>

```python
def put_salesforce(
  enable_dynamic_field_update: bool | IResolvable = None,
  include_deleted_records: bool | IResolvable = None,
  object: str = None
) -> None
```

###### `enable_dynamic_field_update`<sup>Optional</sup> <a name="enable_dynamic_field_update" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce.parameter.enableDynamicFieldUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}.

---

###### `include_deleted_records`<sup>Optional</sup> <a name="include_deleted_records" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce.parameter.includeDeletedRecords"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}.

---

###### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow"></a>

```python
def put_service_now(
  object: str = None
) -> None
```

###### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

##### `put_zendesk` <a name="put_zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk"></a>

```python
def put_zendesk(
  object: str = None
) -> None
```

###### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

##### `reset_marketo` <a name="reset_marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo"></a>

```python
def reset_marketo() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_salesforce` <a name="reset_salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce"></a>

```python
def reset_salesforce() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_zendesk` <a name="reset_zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk"></a>

```python
def reset_zendesk() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo">marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce">salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk">zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput">marketo_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput">salesforce_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput">zendesk_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `marketo`<sup>Required</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo"></a>

```python
marketo: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3"></a>

```python
s3: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a>

---

##### `salesforce`<sup>Required</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce"></a>

```python
salesforce: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow"></a>

```python
service_now: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a>

---

##### `zendesk`<sup>Required</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk"></a>

```python
zendesk: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a>

---

##### `marketo_input`<sup>Optional</sup> <a name="marketo_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput"></a>

```python
marketo_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---

##### `salesforce_input`<sup>Optional</sup> <a name="salesforce_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput"></a>

```python
salesforce_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---

##### `zendesk_input`<sup>Optional</sup> <a name="zendesk_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput"></a>

```python
zendesk_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate">reset_enable_dynamic_field_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords">reset_include_deleted_records</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_dynamic_field_update` <a name="reset_enable_dynamic_field_update" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate"></a>

```python
def reset_enable_dynamic_field_update() -> None
```

##### `reset_include_deleted_records` <a name="reset_include_deleted_records" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords"></a>

```python
def reset_include_deleted_records() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput">enable_dynamic_field_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput">include_deleted_records_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate">enable_dynamic_field_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords">include_deleted_records</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_dynamic_field_update_input`<sup>Optional</sup> <a name="enable_dynamic_field_update_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput"></a>

```python
enable_dynamic_field_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_deleted_records_input`<sup>Optional</sup> <a name="include_deleted_records_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput"></a>

```python
include_deleted_records_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `enable_dynamic_field_update`<sup>Required</sup> <a name="enable_dynamic_field_update" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate"></a>

```python
enable_dynamic_field_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_deleted_records`<sup>Required</sup> <a name="include_deleted_records" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords"></a>

```python
include_deleted_records: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object` <a name="reset_object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object` <a name="reset_object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo">reset_marketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce">reset_salesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk">reset_zendesk</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_marketo` <a name="reset_marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo"></a>

```python
def reset_marketo() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_salesforce` <a name="reset_salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce"></a>

```python
def reset_salesforce() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_zendesk` <a name="reset_zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk"></a>

```python
def reset_zendesk() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput">marketo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input">s3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput">salesforce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput">zendesk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo">marketo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce">salesforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow">service_now</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk">zendesk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `marketo_input`<sup>Optional</sup> <a name="marketo_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput"></a>

```python
marketo_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input"></a>

```python
s3_input: str
```

- *Type:* str

---

##### `salesforce_input`<sup>Optional</sup> <a name="salesforce_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput"></a>

```python
salesforce_input: str
```

- *Type:* str

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput"></a>

```python
service_now_input: str
```

- *Type:* str

---

##### `zendesk_input`<sup>Optional</sup> <a name="zendesk_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput"></a>

```python
zendesk_input: str
```

- *Type:* str

---

##### `marketo`<sup>Required</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo"></a>

```python
marketo: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `salesforce`<sup>Required</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce"></a>

```python
salesforce: str
```

- *Type:* str

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow"></a>

```python
service_now: str
```

- *Type:* str

---

##### `zendesk`<sup>Required</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk"></a>

```python
zendesk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksList <a name="CustomerprofilesIntegrationFlowDefinitionTasksList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesIntegrationFlowDefinitionTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>]

---


### CustomerprofilesIntegrationFlowDefinitionTasksOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator">put_connector_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties">put_task_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator">reset_connector_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField">reset_destination_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields">reset_source_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties">reset_task_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType">reset_task_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connector_operator` <a name="put_connector_operator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator"></a>

```python
def put_connector_operator(
  marketo: str = None,
  s3: str = None,
  salesforce: str = None,
  service_now: str = None,
  zendesk: str = None
) -> None
```

###### `marketo`<sup>Optional</sup> <a name="marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.marketo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.s3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

###### `salesforce`<sup>Optional</sup> <a name="salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.salesforce"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.serviceNow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

###### `zendesk`<sup>Optional</sup> <a name="zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.zendesk"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

##### `put_task_properties` <a name="put_task_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties"></a>

```python
def put_task_properties(
  value: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]

---

##### `reset_connector_operator` <a name="reset_connector_operator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator"></a>

```python
def reset_connector_operator() -> None
```

##### `reset_destination_field` <a name="reset_destination_field" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField"></a>

```python
def reset_destination_field() -> None
```

##### `reset_source_fields` <a name="reset_source_fields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields"></a>

```python
def reset_source_fields() -> None
```

##### `reset_task_properties` <a name="reset_task_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties"></a>

```python
def reset_task_properties() -> None
```

##### `reset_task_type` <a name="reset_task_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType"></a>

```python
def reset_task_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator">connector_operator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties">task_properties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput">connector_operator_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput">destination_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput">source_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput">task_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField">destination_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields">source_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_operator`<sup>Required</sup> <a name="connector_operator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator"></a>

```python
connector_operator: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a>

---

##### `task_properties`<sup>Required</sup> <a name="task_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties"></a>

```python
task_properties: CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a>

---

##### `connector_operator_input`<sup>Optional</sup> <a name="connector_operator_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput"></a>

```python
connector_operator_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---

##### `destination_field_input`<sup>Optional</sup> <a name="destination_field_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput"></a>

```python
destination_field_input: str
```

- *Type:* str

---

##### `source_fields_input`<sup>Optional</sup> <a name="source_fields_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput"></a>

```python
source_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_properties_input`<sup>Optional</sup> <a name="task_properties_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput"></a>

```python
task_properties_input: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `destination_field`<sup>Required</sup> <a name="destination_field" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField"></a>

```python
destination_field: str
```

- *Type:* str

---

##### `source_fields`<sup>Required</sup> <a name="source_fields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields"></a>

```python
source_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTasks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>]

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey">reset_operator_property_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty">reset_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator_property_key` <a name="reset_operator_property_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey"></a>

```python
def reset_operator_property_key() -> None
```

##### `reset_property` <a name="reset_property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty"></a>

```python
def reset_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput">operator_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput">property_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey">operator_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_property_key_input`<sup>Optional</sup> <a name="operator_property_key_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput"></a>

```python
operator_property_key_input: str
```

- *Type:* str

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput"></a>

```python
property_input: str
```

- *Type:* str

---

##### `operator_property_key`<sup>Required</sup> <a name="operator_property_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey"></a>

```python
operator_property_key: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties">put_trigger_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties">reset_trigger_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType">reset_trigger_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger_properties` <a name="put_trigger_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties"></a>

```python
def put_trigger_properties(
  scheduled: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled = None
) -> None
```

###### `scheduled`<sup>Optional</sup> <a name="scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties.parameter.scheduled"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}.

---

##### `reset_trigger_properties` <a name="reset_trigger_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties"></a>

```python
def reset_trigger_properties() -> None
```

##### `reset_trigger_type` <a name="reset_trigger_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType"></a>

```python
def reset_trigger_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties">trigger_properties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput">trigger_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput">trigger_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_properties`<sup>Required</sup> <a name="trigger_properties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties"></a>

```python
trigger_properties: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a>

---

##### `trigger_properties_input`<sup>Optional</sup> <a name="trigger_properties_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput"></a>

```python
trigger_properties_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput"></a>

```python
trigger_type_input: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled">put_scheduled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled">reset_scheduled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scheduled` <a name="put_scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled"></a>

```python
def put_scheduled(
  data_pull_mode: str = None,
  first_execution_from: typing.Union[int, float] = None,
  schedule_end_time: typing.Union[int, float] = None,
  schedule_expression: str = None,
  schedule_offset: typing.Union[int, float] = None,
  schedule_start_time: typing.Union[int, float] = None,
  timezone: str = None
) -> None
```

###### `data_pull_mode`<sup>Optional</sup> <a name="data_pull_mode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.dataPullMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}.

---

###### `first_execution_from`<sup>Optional</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.firstExecutionFrom"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}.

---

###### `schedule_end_time`<sup>Optional</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.scheduleEndTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}.

---

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}.

---

###### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.scheduleOffset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}.

---

###### `schedule_start_time`<sup>Optional</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.scheduleStartTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}.

---

##### `reset_scheduled` <a name="reset_scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled"></a>

```python
def reset_scheduled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled">scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput">scheduled_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheduled`<sup>Required</sup> <a name="scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled"></a>

```python
scheduled: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a>

---

##### `scheduled_input`<sup>Optional</sup> <a name="scheduled_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput"></a>

```python
scheduled_input: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode">reset_data_pull_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom">reset_first_execution_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime">reset_schedule_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset">reset_schedule_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime">reset_schedule_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_pull_mode` <a name="reset_data_pull_mode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode"></a>

```python
def reset_data_pull_mode() -> None
```

##### `reset_first_execution_from` <a name="reset_first_execution_from" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom"></a>

```python
def reset_first_execution_from() -> None
```

##### `reset_schedule_end_time` <a name="reset_schedule_end_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime"></a>

```python
def reset_schedule_end_time() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_schedule_offset` <a name="reset_schedule_offset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset"></a>

```python
def reset_schedule_offset() -> None
```

##### `reset_schedule_start_time` <a name="reset_schedule_start_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime"></a>

```python
def reset_schedule_start_time() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput">data_pull_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput">first_execution_from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput">schedule_end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput">schedule_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput">schedule_start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode">data_pull_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom">first_execution_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_pull_mode_input`<sup>Optional</sup> <a name="data_pull_mode_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput"></a>

```python
data_pull_mode_input: str
```

- *Type:* str

---

##### `first_execution_from_input`<sup>Optional</sup> <a name="first_execution_from_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput"></a>

```python
first_execution_from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_end_time_input`<sup>Optional</sup> <a name="schedule_end_time_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput"></a>

```python
schedule_end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_offset_input`<sup>Optional</sup> <a name="schedule_offset_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput"></a>

```python
schedule_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_start_time_input`<sup>Optional</sup> <a name="schedule_start_time_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput"></a>

```python
schedule_start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `data_pull_mode`<sup>Required</sup> <a name="data_pull_mode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode"></a>

```python
data_pull_mode: str
```

- *Type:* str

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom"></a>

```python
first_execution_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_end_time`<sup>Required</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_offset`<sup>Required</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_start_time`<sup>Required</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---


### CustomerprofilesIntegrationObjectTypeNamesList <a name="CustomerprofilesIntegrationObjectTypeNamesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesIntegrationObjectTypeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesIntegrationObjectTypeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>]

---


### CustomerprofilesIntegrationObjectTypeNamesOutputReference <a name="CustomerprofilesIntegrationObjectTypeNamesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationObjectTypeNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>

---


### CustomerprofilesIntegrationTagsList <a name="CustomerprofilesIntegrationTagsList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>]

---


### CustomerprofilesIntegrationTagsOutputReference <a name="CustomerprofilesIntegrationTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_integration

customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesIntegrationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>

---



