# `vpclatticeListener` Submodule <a name="`vpclatticeListener` Submodule" id="@cdktn/provider-awscc.vpclatticeListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeListener <a name="VpclatticeListener" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener awscc_vpclattice_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListener(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_action: VpclatticeListenerDefaultAction,
  protocol: str,
  name: str = None,
  port: typing.Union[int, float] = None,
  service_identifier: str = None,
  tags: IResolvable | typing.List[VpclatticeListenerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.defaultAction">default_action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.serviceIdentifier">service_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.defaultAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}.

---

##### `service_identifier`<sup>Optional</sup> <a name="service_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.serviceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction">put_default_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetServiceIdentifier">reset_service_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_action` <a name="put_default_action" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction"></a>

```python
def put_default_action(
  fixed_response: VpclatticeListenerDefaultActionFixedResponse = None,
  forward: VpclatticeListenerDefaultActionForward = None
) -> None
```

###### `fixed_response`<sup>Optional</sup> <a name="fixed_response" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction.parameter.fixedResponse"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}.

---

###### `forward`<sup>Optional</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putDefaultAction.parameter.forward"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[VpclatticeListenerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_service_identifier` <a name="reset_service_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetServiceIdentifier"></a>

```python
def reset_service_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VpclatticeListener resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VpclatticeListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpclatticeListener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpclatticeListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultAction">default_action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList">VpclatticeListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultActionInput">default_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput">service_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultAction"></a>

```python
default_action: VpclatticeListenerDefaultActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tags"></a>

```python
tags: VpclatticeListenerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList">VpclatticeListenerTagsList</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.defaultActionInput"></a>

```python
default_action_input: IResolvable | VpclatticeListenerDefaultAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `service_identifier_input`<sup>Optional</sup> <a name="service_identifier_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput"></a>

```python
service_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[VpclatticeListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeListenerConfig <a name="VpclatticeListenerConfig" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_action: VpclatticeListenerDefaultAction,
  protocol: str,
  name: str = None,
  port: typing.Union[int, float] = None,
  service_identifier: str = None,
  tags: IResolvable | typing.List[VpclatticeListenerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction">default_action</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction"></a>

```python
default_action: VpclatticeListenerDefaultAction
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}.

---

##### `service_identifier`<sup>Optional</sup> <a name="service_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[VpclatticeListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}.

---

### VpclatticeListenerDefaultAction <a name="VpclatticeListenerDefaultAction" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultAction(
  fixed_response: VpclatticeListenerDefaultActionFixedResponse = None,
  forward: VpclatticeListenerDefaultActionForward = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}. |

---

##### `fixed_response`<sup>Optional</sup> <a name="fixed_response" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse"></a>

```python
fixed_response: VpclatticeListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward"></a>

```python
forward: VpclatticeListenerDefaultActionForward
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}.

---

### VpclatticeListenerDefaultActionFixedResponse <a name="VpclatticeListenerDefaultActionFixedResponse" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse(
  status_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}. |

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}.

---

### VpclatticeListenerDefaultActionForward <a name="VpclatticeListenerDefaultActionForward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionForward(
  target_groups: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups">target_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}. |

---

##### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups"></a>

```python
target_groups: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}.

---

### VpclatticeListenerDefaultActionForwardTargetGroups <a name="VpclatticeListenerDefaultActionForwardTargetGroups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups(
  target_group_identifier: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier">target_group_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}. |

---

##### `target_group_identifier`<sup>Optional</sup> <a name="target_group_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```python
target_group_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}.

---

### VpclatticeListenerTags <a name="VpclatticeListenerTags" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#key VpclatticeListener#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#value VpclatticeListener#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#key VpclatticeListener#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#value VpclatticeListener#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeListenerDefaultActionFixedResponseOutputReference <a name="VpclatticeListenerDefaultActionFixedResponseOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeListenerDefaultActionFixedResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---


### VpclatticeListenerDefaultActionForwardOutputReference <a name="VpclatticeListenerDefaultActionForwardOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups">put_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups">reset_target_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_groups` <a name="put_target_groups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups"></a>

```python
def put_target_groups(
  value: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]

---

##### `reset_target_groups` <a name="reset_target_groups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups"></a>

```python
def reset_target_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput">target_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups"></a>

```python
target_groups: VpclatticeListenerDefaultActionForwardTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a>

---

##### `target_groups_input`<sup>Optional</sup> <a name="target_groups_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput"></a>

```python
target_groups_input: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeListenerDefaultActionForward
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

---


### VpclatticeListenerDefaultActionForwardTargetGroupsList <a name="VpclatticeListenerDefaultActionForwardTargetGroupsList" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]

---


### VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference <a name="VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier">reset_target_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_group_identifier` <a name="reset_target_group_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier"></a>

```python
def reset_target_group_identifier() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">target_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">target_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_identifier_input`<sup>Optional</sup> <a name="target_group_identifier_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```python
target_group_identifier_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_identifier`<sup>Required</sup> <a name="target_group_identifier" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```python
target_group_identifier: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeListenerDefaultActionForwardTargetGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>

---


### VpclatticeListenerDefaultActionOutputReference <a name="VpclatticeListenerDefaultActionOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerDefaultActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse">put_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward">put_forward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse">reset_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward">reset_forward</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fixed_response` <a name="put_fixed_response" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse"></a>

```python
def put_fixed_response(
  status_code: typing.Union[int, float] = None
) -> None
```

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}.

---

##### `put_forward` <a name="put_forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward"></a>

```python
def put_forward(
  target_groups: IResolvable | typing.List[VpclatticeListenerDefaultActionForwardTargetGroups] = None
) -> None
```

###### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward.parameter.targetGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups">VpclatticeListenerDefaultActionForwardTargetGroups</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}.

---

##### `reset_fixed_response` <a name="reset_fixed_response" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse"></a>

```python
def reset_fixed_response() -> None
```

##### `reset_forward` <a name="reset_forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward"></a>

```python
def reset_forward() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference">VpclatticeListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput">fixed_response_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput">forward_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse"></a>

```python
fixed_response: VpclatticeListenerDefaultActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward"></a>

```python
forward: VpclatticeListenerDefaultActionForwardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference">VpclatticeListenerDefaultActionForwardOutputReference</a>

---

##### `fixed_response_input`<sup>Optional</sup> <a name="fixed_response_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```python
fixed_response_input: IResolvable | VpclatticeListenerDefaultActionFixedResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput"></a>

```python
forward_input: IResolvable | VpclatticeListenerDefaultActionForward
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionForward">VpclatticeListenerDefaultActionForward</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeListenerDefaultAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---


### VpclatticeListenerTagsList <a name="VpclatticeListenerTagsList" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpclatticeListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VpclatticeListenerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>]

---


### VpclatticeListenerTagsOutputReference <a name="VpclatticeListenerTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_listener

vpclatticeListener.VpclatticeListenerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeListenerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeListener.VpclatticeListenerTags">VpclatticeListenerTags</a>

---



