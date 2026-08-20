# `networkmanagerCoreNetworkPrefixListAssociation` Submodule <a name="`networkmanagerCoreNetworkPrefixListAssociation` Submodule" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPrefixListAssociation <a name="NetworkmanagerCoreNetworkPrefixListAssociation" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association awscc_networkmanager_core_network_prefix_list_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  prefix_list_alias: str,
  prefix_list_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | The ID of the core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.prefixListAlias">prefix_list_alias</a></code> | <code>str</code> | The alias of the prefix list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.prefixListArn">prefix_list_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the prefix list. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

The ID of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#core_network_id NetworkmanagerCoreNetworkPrefixListAssociation#core_network_id}

---

##### `prefix_list_alias`<sup>Required</sup> <a name="prefix_list_alias" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.prefixListAlias"></a>

- *Type:* str

The alias of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_alias NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_alias}

---

##### `prefix_list_arn`<sup>Required</sup> <a name="prefix_list_arn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.Initializer.parameter.prefixListArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_arn NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerCoreNetworkPrefixListAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerCoreNetworkPrefixListAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerCoreNetworkPrefixListAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerCoreNetworkPrefixListAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerCoreNetworkPrefixListAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAliasInput">prefix_list_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArnInput">prefix_list_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAlias">prefix_list_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArn">prefix_list_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `prefix_list_alias_input`<sup>Optional</sup> <a name="prefix_list_alias_input" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAliasInput"></a>

```python
prefix_list_alias_input: str
```

- *Type:* str

---

##### `prefix_list_arn_input`<sup>Optional</sup> <a name="prefix_list_arn_input" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArnInput"></a>

```python
prefix_list_arn_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `prefix_list_alias`<sup>Required</sup> <a name="prefix_list_alias" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListAlias"></a>

```python
prefix_list_alias: str
```

- *Type:* str

---

##### `prefix_list_arn`<sup>Required</sup> <a name="prefix_list_arn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.prefixListArn"></a>

```python
prefix_list_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPrefixListAssociationConfig <a name="NetworkmanagerCoreNetworkPrefixListAssociationConfig" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_core_network_prefix_list_association

networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  prefix_list_alias: str,
  prefix_list_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | The ID of the core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListAlias">prefix_list_alias</a></code> | <code>str</code> | The alias of the prefix list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListArn">prefix_list_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the prefix list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

The ID of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#core_network_id NetworkmanagerCoreNetworkPrefixListAssociation#core_network_id}

---

##### `prefix_list_alias`<sup>Required</sup> <a name="prefix_list_alias" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListAlias"></a>

```python
prefix_list_alias: str
```

- *Type:* str

The alias of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_alias NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_alias}

---

##### `prefix_list_arn`<sup>Required</sup> <a name="prefix_list_arn" id="@cdktn/provider-awscc.networkmanagerCoreNetworkPrefixListAssociation.NetworkmanagerCoreNetworkPrefixListAssociationConfig.property.prefixListArn"></a>

```python
prefix_list_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_arn NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_arn}

---



