# `networkmanagerLink` Submodule <a name="`networkmanagerLink` Submodule" id="@cdktn/provider-awscc.networkmanagerLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerLink <a name="NetworkmanagerLink" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link awscc_networkmanager_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bandwidth: NetworkmanagerLinkBandwidth,
  global_network_id: str,
  site_id: str,
  description: str = None,
  provider_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerLinkTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | The Bandwidth for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | The ID of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | The provider of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]</code> | The tags for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the link. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.bandwidth"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

The Bandwidth for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.siteId"></a>

- *Type:* str

The ID of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#site_id NetworkmanagerLink#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.description"></a>

- *Type:* str

The description of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#description NetworkmanagerLink#description}

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.providerName"></a>

- *Type:* str

The provider of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#provider_name NetworkmanagerLink#provider_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]

The tags for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#tags NetworkmanagerLink#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.type"></a>

- *Type:* str

The type of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#type NetworkmanagerLink#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth">put_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bandwidth` <a name="put_bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth"></a>

```python
def put_bandwidth(
  download_speed: typing.Union[int, float] = None,
  upload_speed: typing.Union[int, float] = None
) -> None
```

###### `download_speed`<sup>Optional</sup> <a name="download_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth.parameter.downloadSpeed"></a>

- *Type:* typing.Union[int, float]

Download speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#download_speed NetworkmanagerLink#download_speed}

---

###### `upload_speed`<sup>Optional</sup> <a name="upload_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth.parameter.uploadSpeed"></a>

- *Type:* typing.Union[int, float]

Upload speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerLinkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn">link_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput">bandwidth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth"></a>

```python
bandwidth: NetworkmanagerLinkBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_arn`<sup>Required</sup> <a name="link_arn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn"></a>

```python
link_arn: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags"></a>

```python
tags: NetworkmanagerLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a>

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput"></a>

```python
bandwidth_input: IResolvable | NetworkmanagerLinkBandwidth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerLinkBandwidth <a name="NetworkmanagerLinkBandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkBandwidth(
  download_speed: typing.Union[int, float] = None,
  upload_speed: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed">download_speed</a></code> | <code>typing.Union[int, float]</code> | Download speed in Mbps. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed">upload_speed</a></code> | <code>typing.Union[int, float]</code> | Upload speed in Mbps. |

---

##### `download_speed`<sup>Optional</sup> <a name="download_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed"></a>

```python
download_speed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Download speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#download_speed NetworkmanagerLink#download_speed}

---

##### `upload_speed`<sup>Optional</sup> <a name="upload_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed"></a>

```python
upload_speed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Upload speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}

---

### NetworkmanagerLinkConfig <a name="NetworkmanagerLinkConfig" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bandwidth: NetworkmanagerLinkBandwidth,
  global_network_id: str,
  site_id: str,
  description: str = None,
  provider_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerLinkTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | The Bandwidth for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId">site_id</a></code> | <code>str</code> | The ID of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description">description</a></code> | <code>str</code> | The description of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName">provider_name</a></code> | <code>str</code> | The provider of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]</code> | The tags for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type">type</a></code> | <code>str</code> | The type of the link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth"></a>

```python
bandwidth: NetworkmanagerLinkBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

The Bandwidth for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

The ID of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#site_id NetworkmanagerLink#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#description NetworkmanagerLink#description}

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

The provider of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#provider_name NetworkmanagerLink#provider_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]

The tags for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#tags NetworkmanagerLink#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#type NetworkmanagerLink#type}

---

### NetworkmanagerLinkTags <a name="NetworkmanagerLinkTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#key NetworkmanagerLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#value NetworkmanagerLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerLinkBandwidthOutputReference <a name="NetworkmanagerLinkBandwidthOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed">reset_download_speed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed">reset_upload_speed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_download_speed` <a name="reset_download_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed"></a>

```python
def reset_download_speed() -> None
```

##### `reset_upload_speed` <a name="reset_upload_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed"></a>

```python
def reset_upload_speed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput">download_speed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput">upload_speed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed">download_speed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed">upload_speed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `download_speed_input`<sup>Optional</sup> <a name="download_speed_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput"></a>

```python
download_speed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_speed_input`<sup>Optional</sup> <a name="upload_speed_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput"></a>

```python
upload_speed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_speed`<sup>Required</sup> <a name="download_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed"></a>

```python
download_speed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_speed`<sup>Required</sup> <a name="upload_speed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed"></a>

```python
upload_speed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerLinkBandwidth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---


### NetworkmanagerLinkTagsList <a name="NetworkmanagerLinkTagsList" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>]

---


### NetworkmanagerLinkTagsOutputReference <a name="NetworkmanagerLinkTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_link

networkmanagerLink.NetworkmanagerLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerLinkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags">NetworkmanagerLinkTags</a>

---



