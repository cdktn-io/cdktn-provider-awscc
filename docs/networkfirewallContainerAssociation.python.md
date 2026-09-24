# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_association_name: str,
  container_monitoring_configurations: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations],
  type: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallContainerAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerAssociationName">container_association_name</a></code> | <code>str</code> | The descriptive name of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerMonitoringConfigurations">container_monitoring_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]</code> | The monitoring configurations for the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of containers to monitor. You can't change the container type after creation. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_association_name`<sup>Required</sup> <a name="container_association_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerAssociationName"></a>

- *Type:* str

The descriptive name of the container association.

You can't change the name of a container association after you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}

---

##### `container_monitoring_configurations`<sup>Required</sup> <a name="container_monitoring_configurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.containerMonitoringConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]

The monitoring configurations for the container association.

Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_monitoring_configurations NetworkfirewallContainerAssociation#container_monitoring_configurations}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.type"></a>

- *Type:* str

The type of containers to monitor. You can't change the container type after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.description"></a>

- *Type:* str

A description of the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations">put_container_monitoring_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container_monitoring_configurations` <a name="put_container_monitoring_configurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations"></a>

```python
def put_container_monitoring_configurations(
  value: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkfirewallContainerAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">container_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">container_monitoring_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">resolved_cidr_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">container_association_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput">container_monitoring_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">container_association_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_association_arn`<sup>Required</sup> <a name="container_association_arn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```python
container_association_arn: str
```

- *Type:* str

---

##### `container_monitoring_configurations`<sup>Required</sup> <a name="container_monitoring_configurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```python
container_monitoring_configurations: NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resolved_cidr_count`<sup>Required</sup> <a name="resolved_cidr_count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```python
resolved_cidr_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```python
tags: NetworkfirewallContainerAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a>

---

##### `container_association_name_input`<sup>Optional</sup> <a name="container_association_name_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```python
container_association_name_input: str
```

- *Type:* str

---

##### `container_monitoring_configurations_input`<sup>Optional</sup> <a name="container_monitoring_configurations_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput"></a>

```python
container_monitoring_configurations_input: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkfirewallContainerAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `container_association_name`<sup>Required</sup> <a name="container_association_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```python
container_association_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_association_name: str,
  container_monitoring_configurations: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations],
  type: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallContainerAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">container_association_name</a></code> | <code>str</code> | The descriptive name of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations">container_monitoring_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]</code> | The monitoring configurations for the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">type</a></code> | <code>str</code> | The type of containers to monitor. You can't change the container type after creation. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">description</a></code> | <code>str</code> | A description of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_association_name`<sup>Required</sup> <a name="container_association_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```python
container_association_name: str
```

- *Type:* str

The descriptive name of the container association.

You can't change the name of a container association after you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}

---

##### `container_monitoring_configurations`<sup>Required</sup> <a name="container_monitoring_configurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations"></a>

```python
container_monitoring_configurations: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]

The monitoring configurations for the container association.

Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_monitoring_configurations NetworkfirewallContainerAssociation#container_monitoring_configurations}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of containers to monitor. You can't change the container type after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkfirewallContainerAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations(
  cluster_arn: str,
  attribute_filters: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn">cluster_arn</a></code> | <code>str</code> | The ARN of the Amazon ECS or Amazon EKS cluster to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters">attribute_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]</code> | Key-value pairs that filter which containers are tracked. |

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

The ARN of the Amazon ECS or Amazon EKS cluster to monitor.

The cluster must be in the same Region and account as the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}

---

##### `attribute_filters`<sup>Optional</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters"></a>

```python
attribute_filters: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]

Key-value pairs that filter which containers are tracked.

For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#attribute_filters NetworkfirewallContainerAssociation#attribute_filters}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key">key</a></code> | <code>str</code> | The attribute key to filter on. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value">value</a></code> | <code>str</code> | The attribute value to match. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key"></a>

```python
key: str
```

- *Type:* str

The attribute key to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value"></a>

```python
value: str
```

- *Type:* str

The attribute value to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

### NetworkfirewallContainerAssociationTags <a name="NetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key">key</a></code> | <code>str</code> | The part of the key:value pair that defines a tag. Tag keys are case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value">value</a></code> | <code>str</code> | The part of the key:value pair that defines a tag. Tag values are case-sensitive. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The part of the key:value pair that defines a tag. Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The part of the key:value pair that defines a tag. Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters">put_attribute_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters">reset_attribute_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute_filters` <a name="put_attribute_filters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters"></a>

```python
def put_attribute_filters(
  value: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]

---

##### `reset_attribute_filters` <a name="reset_attribute_filters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters"></a>

```python
def reset_attribute_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">attribute_filters</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput">attribute_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_filters`<sup>Required</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```python
attribute_filters: NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `attribute_filters_input`<sup>Optional</sup> <a name="attribute_filters_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput"></a>

```python
attribute_filters_input: IResolvable | typing.List[NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>]

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>

---


### NetworkfirewallContainerAssociationTagsList <a name="NetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallContainerAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallContainerAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>]

---


### NetworkfirewallContainerAssociationTagsOutputReference <a name="NetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_container_association

networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallContainerAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>

---



