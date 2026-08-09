# `outpostsSite` Submodule <a name="`outpostsSite` Submodule" id="@cdktn/provider-awscc.outpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsSite <a name="OutpostsSite" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSite(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  notes: str = None,
  operating_address: OutpostsSiteOperatingAddress = None,
  rack_physical_properties: OutpostsSiteRackPhysicalProperties = None,
  shipping_address: OutpostsSiteShippingAddress = None,
  tags: IResolvable | typing.List[OutpostsSiteTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.operatingAddress">operating_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.rackPhysicalProperties">rack_physical_properties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `operating_address`<sup>Optional</sup> <a name="operating_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.operatingAddress"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `rack_physical_properties`<sup>Optional</sup> <a name="rack_physical_properties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.rackPhysicalProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `shipping_address`<sup>Optional</sup> <a name="shipping_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.shippingAddress"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress">put_operating_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties">put_rack_physical_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress">put_shipping_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress">reset_operating_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties">reset_rack_physical_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress">reset_shipping_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_operating_address` <a name="put_operating_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress"></a>

```python
def put_operating_address(
  address_line1: str = None,
  address_line2: str = None,
  address_line3: str = None,
  city: str = None,
  contact_name: str = None,
  contact_phone_number: str = None,
  country_code: str = None,
  district_or_county: str = None,
  municipality: str = None,
  postal_code: str = None,
  state_or_region: str = None
) -> None
```

###### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

###### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

###### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.addressLine3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

###### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.contactName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

###### `contact_phone_number`<sup>Optional</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.contactPhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

###### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.districtOrCounty"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

###### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.municipality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

###### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.stateOrRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

##### `put_rack_physical_properties` <a name="put_rack_physical_properties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties"></a>

```python
def put_rack_physical_properties(
  fiber_optic_cable_type: str = None,
  maximum_supported_weight_lbs: str = None,
  optical_standard: str = None,
  power_connector: str = None,
  power_draw_kva: str = None,
  power_feed_drop: str = None,
  power_phase: str = None,
  uplink_count: str = None,
  uplink_gbps: str = None
) -> None
```

###### `fiber_optic_cable_type`<sup>Optional</sup> <a name="fiber_optic_cable_type" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.fiberOpticCableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

###### `maximum_supported_weight_lbs`<sup>Optional</sup> <a name="maximum_supported_weight_lbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.maximumSupportedWeightLbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

###### `optical_standard`<sup>Optional</sup> <a name="optical_standard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.opticalStandard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

###### `power_connector`<sup>Optional</sup> <a name="power_connector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.powerConnector"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

###### `power_draw_kva`<sup>Optional</sup> <a name="power_draw_kva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.powerDrawKva"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

###### `power_feed_drop`<sup>Optional</sup> <a name="power_feed_drop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.powerFeedDrop"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

###### `power_phase`<sup>Optional</sup> <a name="power_phase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.powerPhase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

###### `uplink_count`<sup>Optional</sup> <a name="uplink_count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.uplinkCount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

###### `uplink_gbps`<sup>Optional</sup> <a name="uplink_gbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.uplinkGbps"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

##### `put_shipping_address` <a name="put_shipping_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress"></a>

```python
def put_shipping_address(
  address_line1: str = None,
  address_line2: str = None,
  address_line3: str = None,
  city: str = None,
  contact_name: str = None,
  contact_phone_number: str = None,
  country_code: str = None,
  district_or_county: str = None,
  municipality: str = None,
  postal_code: str = None,
  state_or_region: str = None
) -> None
```

###### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

###### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

###### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.addressLine3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

###### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.contactName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

###### `contact_phone_number`<sup>Optional</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.contactPhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

###### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.districtOrCounty"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

###### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.municipality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

###### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.stateOrRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OutpostsSiteTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_operating_address` <a name="reset_operating_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress"></a>

```python
def reset_operating_address() -> None
```

##### `reset_rack_physical_properties` <a name="reset_rack_physical_properties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties"></a>

```python
def reset_rack_physical_properties() -> None
```

##### `reset_shipping_address` <a name="reset_shipping_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress"></a>

```python
def reset_shipping_address() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSite.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OutpostsSite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress">operating_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties">rack_physical_properties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn">site_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput">operating_address_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput">rack_physical_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput">shipping_address_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes">notes</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operating_address`<sup>Required</sup> <a name="operating_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress"></a>

```python
operating_address: OutpostsSiteOperatingAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a>

---

##### `rack_physical_properties`<sup>Required</sup> <a name="rack_physical_properties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties"></a>

```python
rack_physical_properties: OutpostsSiteRackPhysicalPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `shipping_address`<sup>Required</sup> <a name="shipping_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress"></a>

```python
shipping_address: OutpostsSiteShippingAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a>

---

##### `site_arn`<sup>Required</sup> <a name="site_arn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn"></a>

```python
site_arn: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags"></a>

```python
tags: OutpostsSiteTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `operating_address_input`<sup>Optional</sup> <a name="operating_address_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput"></a>

```python
operating_address_input: IResolvable | OutpostsSiteOperatingAddress
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `rack_physical_properties_input`<sup>Optional</sup> <a name="rack_physical_properties_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput"></a>

```python
rack_physical_properties_input: IResolvable | OutpostsSiteRackPhysicalProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `shipping_address_input`<sup>Optional</sup> <a name="shipping_address_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput"></a>

```python
shipping_address_input: IResolvable | OutpostsSiteShippingAddress
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OutpostsSiteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsSiteConfig <a name="OutpostsSiteConfig" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  notes: str = None,
  operating_address: OutpostsSiteOperatingAddress = None,
  rack_physical_properties: OutpostsSiteRackPhysicalProperties = None,
  shipping_address: OutpostsSiteShippingAddress = None,
  tags: IResolvable | typing.List[OutpostsSiteTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress">operating_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties">rack_physical_properties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `operating_address`<sup>Optional</sup> <a name="operating_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress"></a>

```python
operating_address: OutpostsSiteOperatingAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `rack_physical_properties`<sup>Optional</sup> <a name="rack_physical_properties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties"></a>

```python
rack_physical_properties: OutpostsSiteRackPhysicalProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `shipping_address`<sup>Optional</sup> <a name="shipping_address" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress"></a>

```python
shipping_address: OutpostsSiteShippingAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OutpostsSiteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

### OutpostsSiteOperatingAddress <a name="OutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteOperatingAddress(
  address_line1: str = None,
  address_line2: str = None,
  address_line3: str = None,
  city: str = None,
  contact_name: str = None,
  contact_phone_number: str = None,
  country_code: str = None,
  district_or_county: str = None,
  municipality: str = None,
  postal_code: str = None,
  state_or_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3">address_line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName">contact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber">contact_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality">municipality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contact_phone_number`<sup>Optional</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber"></a>

```python
contact_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality"></a>

```python
municipality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteRackPhysicalProperties <a name="OutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteRackPhysicalProperties(
  fiber_optic_cable_type: str = None,
  maximum_supported_weight_lbs: str = None,
  optical_standard: str = None,
  power_connector: str = None,
  power_draw_kva: str = None,
  power_feed_drop: str = None,
  power_phase: str = None,
  uplink_count: str = None,
  uplink_gbps: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType">fiber_optic_cable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs">maximum_supported_weight_lbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard">optical_standard</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector">power_connector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva">power_draw_kva</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop">power_feed_drop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase">power_phase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount">uplink_count</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps">uplink_gbps</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}. |

---

##### `fiber_optic_cable_type`<sup>Optional</sup> <a name="fiber_optic_cable_type" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType"></a>

```python
fiber_optic_cable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

##### `maximum_supported_weight_lbs`<sup>Optional</sup> <a name="maximum_supported_weight_lbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs"></a>

```python
maximum_supported_weight_lbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

##### `optical_standard`<sup>Optional</sup> <a name="optical_standard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard"></a>

```python
optical_standard: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

##### `power_connector`<sup>Optional</sup> <a name="power_connector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector"></a>

```python
power_connector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

##### `power_draw_kva`<sup>Optional</sup> <a name="power_draw_kva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva"></a>

```python
power_draw_kva: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

##### `power_feed_drop`<sup>Optional</sup> <a name="power_feed_drop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop"></a>

```python
power_feed_drop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

##### `power_phase`<sup>Optional</sup> <a name="power_phase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase"></a>

```python
power_phase: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

##### `uplink_count`<sup>Optional</sup> <a name="uplink_count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount"></a>

```python
uplink_count: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

##### `uplink_gbps`<sup>Optional</sup> <a name="uplink_gbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps"></a>

```python
uplink_gbps: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

### OutpostsSiteShippingAddress <a name="OutpostsSiteShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteShippingAddress(
  address_line1: str = None,
  address_line2: str = None,
  address_line3: str = None,
  city: str = None,
  contact_name: str = None,
  contact_phone_number: str = None,
  country_code: str = None,
  district_or_county: str = None,
  municipality: str = None,
  postal_code: str = None,
  state_or_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3">address_line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName">contact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber">contact_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality">municipality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contact_name`<sup>Optional</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contact_phone_number`<sup>Optional</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber"></a>

```python
contact_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality"></a>

```python
municipality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteTags <a name="OutpostsSiteTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#key OutpostsSite#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#value OutpostsSite#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#key OutpostsSite#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/outposts_site#value OutpostsSite#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsSiteOperatingAddressOutputReference <a name="OutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteOperatingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3">reset_address_line3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName">reset_contact_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber">reset_contact_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty">reset_district_or_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality">reset_municipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion">reset_state_or_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_address_line3` <a name="reset_address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3"></a>

```python
def reset_address_line3() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_name` <a name="reset_contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName"></a>

```python
def reset_contact_name() -> None
```

##### `reset_contact_phone_number` <a name="reset_contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber"></a>

```python
def reset_contact_phone_number() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_district_or_county` <a name="reset_district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty"></a>

```python
def reset_district_or_county() -> None
```

##### `reset_municipality` <a name="reset_municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality"></a>

```python
def reset_municipality() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_state_or_region` <a name="reset_state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion"></a>

```python
def reset_state_or_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input">address_line3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput">contact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput">contact_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput">district_or_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput">municipality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput">state_or_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3">address_line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName">contact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">contact_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality">municipality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `address_line3_input`<sup>Optional</sup> <a name="address_line3_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input"></a>

```python
address_line3_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_name_input`<sup>Optional</sup> <a name="contact_name_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput"></a>

```python
contact_name_input: str
```

- *Type:* str

---

##### `contact_phone_number_input`<sup>Optional</sup> <a name="contact_phone_number_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput"></a>

```python
contact_phone_number_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `district_or_county_input`<sup>Optional</sup> <a name="district_or_county_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput"></a>

```python
district_or_county_input: str
```

- *Type:* str

---

##### `municipality_input`<sup>Optional</sup> <a name="municipality_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput"></a>

```python
municipality_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `state_or_region_input`<sup>Optional</sup> <a name="state_or_region_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput"></a>

```python
state_or_region_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `address_line3`<sup>Required</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_name`<sup>Required</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

---

##### `contact_phone_number`<sup>Required</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```python
contact_phone_number: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `district_or_county`<sup>Required</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```python
municipality: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `state_or_region`<sup>Required</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsSiteOperatingAddress
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---


### OutpostsSiteRackPhysicalPropertiesOutputReference <a name="OutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType">reset_fiber_optic_cable_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs">reset_maximum_supported_weight_lbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard">reset_optical_standard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector">reset_power_connector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva">reset_power_draw_kva</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop">reset_power_feed_drop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase">reset_power_phase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount">reset_uplink_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps">reset_uplink_gbps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fiber_optic_cable_type` <a name="reset_fiber_optic_cable_type" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType"></a>

```python
def reset_fiber_optic_cable_type() -> None
```

##### `reset_maximum_supported_weight_lbs` <a name="reset_maximum_supported_weight_lbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs"></a>

```python
def reset_maximum_supported_weight_lbs() -> None
```

##### `reset_optical_standard` <a name="reset_optical_standard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard"></a>

```python
def reset_optical_standard() -> None
```

##### `reset_power_connector` <a name="reset_power_connector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector"></a>

```python
def reset_power_connector() -> None
```

##### `reset_power_draw_kva` <a name="reset_power_draw_kva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva"></a>

```python
def reset_power_draw_kva() -> None
```

##### `reset_power_feed_drop` <a name="reset_power_feed_drop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop"></a>

```python
def reset_power_feed_drop() -> None
```

##### `reset_power_phase` <a name="reset_power_phase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase"></a>

```python
def reset_power_phase() -> None
```

##### `reset_uplink_count` <a name="reset_uplink_count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount"></a>

```python
def reset_uplink_count() -> None
```

##### `reset_uplink_gbps` <a name="reset_uplink_gbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps"></a>

```python
def reset_uplink_gbps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput">fiber_optic_cable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput">maximum_supported_weight_lbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput">optical_standard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput">power_connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput">power_draw_kva_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput">power_feed_drop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput">power_phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput">uplink_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput">uplink_gbps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">fiber_optic_cable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">maximum_supported_weight_lbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">optical_standard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">power_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">power_draw_kva</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">power_feed_drop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">power_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">uplink_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">uplink_gbps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fiber_optic_cable_type_input`<sup>Optional</sup> <a name="fiber_optic_cable_type_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput"></a>

```python
fiber_optic_cable_type_input: str
```

- *Type:* str

---

##### `maximum_supported_weight_lbs_input`<sup>Optional</sup> <a name="maximum_supported_weight_lbs_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput"></a>

```python
maximum_supported_weight_lbs_input: str
```

- *Type:* str

---

##### `optical_standard_input`<sup>Optional</sup> <a name="optical_standard_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput"></a>

```python
optical_standard_input: str
```

- *Type:* str

---

##### `power_connector_input`<sup>Optional</sup> <a name="power_connector_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput"></a>

```python
power_connector_input: str
```

- *Type:* str

---

##### `power_draw_kva_input`<sup>Optional</sup> <a name="power_draw_kva_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput"></a>

```python
power_draw_kva_input: str
```

- *Type:* str

---

##### `power_feed_drop_input`<sup>Optional</sup> <a name="power_feed_drop_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput"></a>

```python
power_feed_drop_input: str
```

- *Type:* str

---

##### `power_phase_input`<sup>Optional</sup> <a name="power_phase_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput"></a>

```python
power_phase_input: str
```

- *Type:* str

---

##### `uplink_count_input`<sup>Optional</sup> <a name="uplink_count_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput"></a>

```python
uplink_count_input: str
```

- *Type:* str

---

##### `uplink_gbps_input`<sup>Optional</sup> <a name="uplink_gbps_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput"></a>

```python
uplink_gbps_input: str
```

- *Type:* str

---

##### `fiber_optic_cable_type`<sup>Required</sup> <a name="fiber_optic_cable_type" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```python
fiber_optic_cable_type: str
```

- *Type:* str

---

##### `maximum_supported_weight_lbs`<sup>Required</sup> <a name="maximum_supported_weight_lbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```python
maximum_supported_weight_lbs: str
```

- *Type:* str

---

##### `optical_standard`<sup>Required</sup> <a name="optical_standard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```python
optical_standard: str
```

- *Type:* str

---

##### `power_connector`<sup>Required</sup> <a name="power_connector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```python
power_connector: str
```

- *Type:* str

---

##### `power_draw_kva`<sup>Required</sup> <a name="power_draw_kva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```python
power_draw_kva: str
```

- *Type:* str

---

##### `power_feed_drop`<sup>Required</sup> <a name="power_feed_drop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```python
power_feed_drop: str
```

- *Type:* str

---

##### `power_phase`<sup>Required</sup> <a name="power_phase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```python
power_phase: str
```

- *Type:* str

---

##### `uplink_count`<sup>Required</sup> <a name="uplink_count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```python
uplink_count: str
```

- *Type:* str

---

##### `uplink_gbps`<sup>Required</sup> <a name="uplink_gbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```python
uplink_gbps: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsSiteRackPhysicalProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---


### OutpostsSiteShippingAddressOutputReference <a name="OutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteShippingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3">reset_address_line3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName">reset_contact_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber">reset_contact_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty">reset_district_or_county</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality">reset_municipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion">reset_state_or_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_address_line3` <a name="reset_address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3"></a>

```python
def reset_address_line3() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_name` <a name="reset_contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName"></a>

```python
def reset_contact_name() -> None
```

##### `reset_contact_phone_number` <a name="reset_contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber"></a>

```python
def reset_contact_phone_number() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_district_or_county` <a name="reset_district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty"></a>

```python
def reset_district_or_county() -> None
```

##### `reset_municipality` <a name="reset_municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality"></a>

```python
def reset_municipality() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_state_or_region` <a name="reset_state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion"></a>

```python
def reset_state_or_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input">address_line3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput">contact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput">contact_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput">district_or_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput">municipality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput">state_or_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3">address_line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName">contact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">contact_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality">municipality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `address_line3_input`<sup>Optional</sup> <a name="address_line3_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input"></a>

```python
address_line3_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_name_input`<sup>Optional</sup> <a name="contact_name_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput"></a>

```python
contact_name_input: str
```

- *Type:* str

---

##### `contact_phone_number_input`<sup>Optional</sup> <a name="contact_phone_number_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput"></a>

```python
contact_phone_number_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `district_or_county_input`<sup>Optional</sup> <a name="district_or_county_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput"></a>

```python
district_or_county_input: str
```

- *Type:* str

---

##### `municipality_input`<sup>Optional</sup> <a name="municipality_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput"></a>

```python
municipality_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `state_or_region_input`<sup>Optional</sup> <a name="state_or_region_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput"></a>

```python
state_or_region_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `address_line3`<sup>Required</sup> <a name="address_line3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_name`<sup>Required</sup> <a name="contact_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

---

##### `contact_phone_number`<sup>Required</sup> <a name="contact_phone_number" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```python
contact_phone_number: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `district_or_county`<sup>Required</sup> <a name="district_or_county" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```python
municipality: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `state_or_region`<sup>Required</sup> <a name="state_or_region" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsSiteShippingAddress
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---


### OutpostsSiteTagsList <a name="OutpostsSiteTagsList" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OutpostsSiteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OutpostsSiteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>]

---


### OutpostsSiteTagsOutputReference <a name="OutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import outposts_site

outpostsSite.OutpostsSiteTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsSiteTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>

---



